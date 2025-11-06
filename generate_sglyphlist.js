const fs = require('fs');
const path = require('path');

// 读取gb2312.txt
const gb2312Path = path.join(__dirname, 'gb2312.txt');
const gb2312Content = fs.readFileSync(gb2312Path, 'utf-8');
const gb2312Chars = gb2312Content.trim().split('\n').filter(c => c && c.length === 1);

console.log(`读取到 ${gb2312Chars.length} 个GB2312简体字符`);

// 读取cglyphlist.js获取glyphMap和glyphList
const cglyphPath = path.join(__dirname, 'pages', 'cglyphlist.js');
const cglyphContent = fs.readFileSync(cglyphPath, 'utf-8');

// 提取glyphMap部分(包括定义)
const glyphMapMatch = cglyphContent.match(/(const glyphMap = \{[\s\S]+?\n\};)/);
if (!glyphMapMatch) {
    console.error('无法提取glyphMap');
    process.exit(1);
}
const glyphMapSection = glyphMapMatch[1];

// 提取glyphList部分用于解析
const glyphListMatch = cglyphContent.match(/const glyphList = (\{[\s\S]+\});/);
if (!glyphListMatch) {
    console.error('无法提取glyphList');
    process.exit(1);
}

// 使用eval解析JSON(因为键名没有引号)
const glyphList = eval('(' + glyphListMatch[1] + ')');
const glyphMapData = eval('(' + cglyphContent.match(/const glyphMap = (\{[\s\S]+?\n\});/)[1] + ')');

console.log(`glyphMap包含 ${Object.keys(glyphMapData).length} 个字形`);

// 找出简体字符对应的glyph名称
const simpleCharGlyphs = [];
const foundChars = new Set();
const notFoundChars = [];

// 从glyphMap中查找简体字符
for (const char of gb2312Chars) {
    let found = false;
    for (const [glyphName, glyphData] of Object.entries(glyphMapData)) {
        if (glyphData.c === char) {
            simpleCharGlyphs.push(glyphName);
            foundChars.add(char);
            found = true;
            break;
        }
    }
    if (!found) {
        notFoundChars.push(char);
    }
}

console.log(`在glyphMap中找到 ${foundChars.size} 个简体字符`);
console.log(`未找到 ${notFoundChars.length} 个简体字符`);

// 识别繁体字符(在基础字库中但不在简体字符集中的CJK汉字)
const baseGlyphs = glyphList['基礎字'] || [];
const traditionalGlyphs = [];

for (const glyphName of baseGlyphs) {
    if (glyphName.startsWith('uni') && glyphName.length === 7) {
        // 这是CJK汉字
        const char = glyphMapData[glyphName]?.c;
        if (char && !foundChars.has(char)) {
            // 在基础字库中,但不在简体字符集中,判定为繁体
            traditionalGlyphs.push(glyphName);
        }
    }
}

console.log(`识别到 ${traditionalGlyphs.length} 个繁体字符需要移出基础字库`);

// 定义常用的标点符号
const commonPunctuation = [
    'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent', 'ampersand', 'quotesingle',
    'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash',
    'colon', 'semicolon', 'less', 'equal', 'greater', 'question', 'at',
    'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore', 'grave',
    'braceleft', 'bar', 'braceright', 'asciitilde',
    // 全角标点
    'uni3001', 'uni3002', 'uni300A', 'uni300B', 'uni300C', 'uni300D', 'uni300E', 'uni300F',
    'uni3010', 'uni3011', 'uni3014', 'uni3015', 'uni3016', 'uni3017',
    'uniFF01', 'uniFF08', 'uniFF09', 'uniFF0C', 'uniFF0E', 'uniFF1A', 'uniFF1B', 
    'uniFF1F', 'uniFF5B', 'uniFF5C', 'uniFF5D',
    // 其他常用符号
    'uni2013', 'uni2014', 'uni2018', 'uni2019', 'uni201C', 'uni201D', 'uni2026'
];

// 生成新的简体中文glyphList  
const newGlyphList = {
    // 保留基础字库,但移除繁体字符,添加标点符号
    '基礎字': [
        ...baseGlyphs.filter(g => !traditionalGlyphs.includes(g)),
        ...commonPunctuation.filter(p => glyphMapData[p]) // 只添加存在于glyphMap中的标点
    ],
    // 添加简体中文常用字(按使用频率排序)
    '簡體常用字': simpleCharGlyphs,
    // 新增繁体字库
    '繁體字': traditionalGlyphs
};

// 保留原有的其他字库(排除日文和命名包)
for (const [listName, glyphs] of Object.entries(glyphList)) {
    if (listName !== '基礎字' && !listName.startsWith('日文') && !listName.startsWith('命名')) {
        newGlyphList[listName] = glyphs;
    }
}

console.log('\n新字库结构:');
console.log(`- 基礎字: ${newGlyphList['基礎字'].length} 个`);
console.log(`- 簡體常用字: ${newGlyphList['簡體常用字'].length} 个`);
console.log(`- 繁體字: ${newGlyphList['繁體字'].length} 个`);

// 生成sglyphlist.js文件内容
const sglyphContent = `// 简体中文字库 - 基于GB2312按使用频率排序
// glyphMap与cglyphlist.js相同

${glyphMapSection}

// 简体中文字符列表
${generateGlyphListCode(newGlyphList)}
`;

const sglyphPath = path.join(__dirname, 'pages', 'sglyphlist.js');
fs.writeFileSync(sglyphPath, sglyphContent, 'utf-8');

console.log(`\n已生成 ${sglyphPath}`);
console.log('\n未找到的简体字符示例(前20个):');
console.log(notFoundChars.slice(0, 20).join(''));

// 辅助函数:生成glyphList代码
function generateGlyphListCode(obj) {
    const lines = ['const glyphList = {'];
    const entries = Object.entries(obj);
    
    for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i];
        const isLast = i === entries.length - 1;
        const jsonValue = JSON.stringify(value);
        lines.push(`  "${key}":${jsonValue}${isLast ? '' : ','}`);
    }
    
    lines.push('};');
    return lines.join('\n');
}
