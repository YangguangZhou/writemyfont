// 用于过滤基础字中的汉字字符
const fs = require('fs');

// 读取 sglyphlist.js 文件
const content = fs.readFileSync('./pages/sglyphlist.js', 'utf-8');

// 提取基础字列表 - 使用支持多行的正则表达式
const match = content.match(/"基礎字":\[([\s\S]*?)\],\s*"簡體常用字#1"/);
if (!match) {
    console.error('找不到基礎字列表');
    process.exit(1);
}

// 解析字符列表
const listText = match[1];
const baseGlyphs = listText
    .split(',')
    .map(g => g.trim().replace(/"/g, '').replace(/\n/g, ''))
    .filter(g => g.length > 0);

console.log(`找到 ${baseGlyphs.length} 个字符`);

// 过滤掉所有 uni 开头且为CJK汉字的字符
const filtered = baseGlyphs.filter(g => {
    // 保留非uni开头的
    if (!g.startsWith('uni')) return true;
    
    // 检查是否为汉字范围
    const code = parseInt(g.substring(3), 16);
    // CJK统一汉字基本区: 4E00-9FFF
    // CJK扩展A: 3400-4DBF
    const isCJK = (code >= 0x3400 && code <= 0x4DBF) || (code >= 0x4E00 && code <= 0x9FFF);
    
    if (isCJK) {
        console.log(`移除汉字: ${g} (U+${g.substring(3).toUpperCase()})`);
    }
    
    return !isCJK;
});

console.log(`\n原始字符数: ${baseGlyphs.length}`);
console.log(`过滤后字符数: ${filtered.length}`);
console.log(`移除的汉字数: ${baseGlyphs.length - filtered.length}`);

// 生成新的基础字列表
const newBaseGlyphs = '"' + filtered.join('","') + '"';

// 替换文件中的基础字列表
const newContent = content.replace(
    /"基礎字":\[[\s\S]*?\],(\s*"簡體常用字#1")/,
    `"基礎字":[${newBaseGlyphs}],$1`
);

// 写回文件
fs.writeFileSync('./pages/sglyphlist.js', newContent, 'utf-8');

console.log('\n✓ 基础字列表已更新');
