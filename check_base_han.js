const fs = require('fs');

// 检查繁体版
let c = fs.readFileSync('./pages/cglyphlist.js','utf-8');
const m = c.match(/"基礎字":\[([^\]]+)\]/);
if(m) {
    const arr = m[1].split(',').map(s=>s.trim().replace(/["\n]/g,'')).filter(s=>s.length>0);
    console.log('繁体基础字总数:', arr.length);
    
    const han = arr.filter(s=>{
        if(!s.startsWith('uni')) return false;
        const code=parseInt(s.substring(3),16);
        return (code>=0x3400 && code<=0x4DBF)||(code>=0x4E00 && code<=0x9FFF);
    });
    
    console.log('繁体基础字中的CJK汉字数:', han.length);
    if (han.length > 0) {
        console.log('前10个:', han.slice(0,10).join(', '));
    }
}

// 检查简体版
c = fs.readFileSync('./pages/sglyphlist.js','utf-8');
const m2 = c.match(/"基礎字":\[([\s\S]*?)\],\s*"簡體常用字#1"/);
if(m2) {
    const arr = m2[1].split(',').map(s=>s.trim().replace(/["\n]/g,'')).filter(s=>s.length>0);
    console.log('\n简体基础字总数:', arr.length);
    
    const han = arr.filter(s=>{
        if(!s.startsWith('uni')) return false;
        const code=parseInt(s.substring(3),16);
        return (code>=0x3400 && code<=0x4DBF)||(code>=0x4E00 && code<=0x9FFF);
    });
    
    console.log('简体基础字中的CJK汉字数:', han.length);
    if (han.length > 0) {
        console.log('前10个:', han.slice(0,10).join(', '));
    }
}
