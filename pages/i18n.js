// 多语言配置
const i18n = {
	// English
	'en': {
		title: 'Handwritten Font Generator',
		appTitle: 'Handwritten Font Generator',
		downloadButtonText: 'Download Font',
		listLabel: 'Lists: ',
		charSeqLabel: 'Character List',
		charUnit: ' chars',
		welcomeTitle: 'Welcome to Handwritten Font Generator!',
		settingsTitle: 'Font Settings',
		downloadTitle: 'Download',
		hintTitle: 'Tips',
		
		// 按钮文字
		findButton: '🔍',
		prevButton: '👈',
		nextButton: '👉',
		clearButton: '🚮',
		moveLeftButton: '⬅️',
		moveRightButton: '➡️',
		moveUpButton: '⬆️',
		moveDownButton: '⬇️',
		undoButton: '↩️',
		hintButton: '💡',
		settingButton: '⚙️',
		downloadButton: '💾',
		langButton: '🌐',
		
		// 设置页面
		spanWelcome: 'Before you start writing, please set the basic info. These settings can be changed later.<br>Tip: If you open this in an in-app browser, we recommend switching to a system browser to avoid data loss!',
		fontNameEngLabel: 'English Font Name',
		fontNameEngPlaceholder: 'Enter English name',
		fontNameCJKLabel: 'CJK Font Name',
		fontNameCJKPlaceholder: 'Enter CJK name',
		scaleRateLabel: 'Writing Box Zoom',
		scaleRateNote: 'Adjust writing box size. Writing can naturally get smaller; shrink the box to enlarge the output font.',
		canvasSizeLabel: 'Canvas Display Size',
		canvasSizeNote: 'Adjust display size of the canvas on screen. Does not affect the output font.',
		gridTypeLabel: 'Grid Guidelines Style',
		gridTypes: {
			'3x3grid': '3x3 Grid',
			'3x3grid-new': 'New 3x3 Grid',
			'2x2grid': '2x2 Grid',
			'stargrid': 'Star Grid',
			'boxgrid': 'Box Grid',
			'nogrid': 'No Grid (Body box only)'
		},
		showBaselineLabel: 'Show Baseline Reference',
		showBaselineNote: 'The baseline reference is located at 3/4 from the top, mainly used to align half-width characters.',
		noFixedWidthLabel: 'Proportional Width for CJK',
		noFixedWidthNote: 'Proportional CJK characters look closer to natural handwriting, but may not suit vertical layout.',
		pressureEffectLabel: 'Pressure Sensitivity (Experimental)',
		pressureEffects: {
			'none': 'Original Value',
			'contrast': 'Increase Contrast',
			'enhance': 'Enhance (Less Effort)',
			'enhancex': 'Super Enhance (Effortless)'
		},
		pressureEffectNote: 'Only works on devices supporting pen pressure sensitivity. This feature is in beta and might change.',
		penAngleModeLabel: 'Enable Stylus Tilt Detection',
		penAngleModeNote: 'Only works on devices that support pen tilt.',
		pressureDrawingLabel: 'Use Old Pen Pressure Mode (Not Recommended)',
		pressureDrawingNote: 'The legacy pressure drawing mode does not support brush shapes.',
		clearAllLabel: 'Clear All Font Data',
		clearAllButton: 'Clear Font Data (This action is irreversible!)',
		resetSettingsLabel: 'Reset All Settings',
		resetSettingsButton: 'Restore Settings to Default',
		resetSettingsConfirm: 'Are you sure you want to restore all settings to default values? Your drawn character data will NOT be deleted.',
		resetSettingsDone: 'Settings have been reset.',
		exportEventsLabel: 'Export System Events (For Debug)',
		exportEventsButton: 'Export System Events',
		
		// 下载页面
		saveAsTesterLabel: 'Test Output Name',
		saveAsTesterNote: 'If checked, an incremental number is appended to the font name to bypass OS font cache issues.',
		downloadFontButton: 'Download Font File (OTF Format)',
		donateTitle: 'Support the Author',
		donateText: 'The rights to the generated font files belong entirely to you. If this tool helped you, feel free to support the author via <a href="https://www.paypal.com/paypalme/buttaiwan" target="_blank">PayPal</a>. Your support helps us keep improving!',
		importDataLabel: 'Import Backup Data',
		exportDataLabel: 'Export Current Data',
		exportDataButton: 'Backup Font Data',
		
		// 提示内容
		hintContent: [
			'Character lists are based on "jf7000 common characters set".',
			'All data is saved locally in your browser. We suggest exporting backups regularly to prevent data loss.',
			'We recommend adjusting position (usually CJK is centered) right after drawing each character, which is easier than bulk adjustment later.',
			'Half-width characters are output with proportional width; horizontal position is ignored. Red line shows the baseline reference.',
			'Full-width alphanumeric characters are automatically generated from half-width ones.',
			'Once mandatory characters are completed, vertical layout and composite settings are processed automatically.',
			'Note: Due to technical limits, the generated OTF files work but are not in standard CID format, and CJK font recognition in Adobe apps may fail.',
			'The service and author are not responsible for any issues caused by using the generated font files.',
			'This service does not collect your handwriting or personal info. Please assess risks before sharing your fonts.',
			'This tool is updated irregularly. All source code is open on GitHub; contact the author for technical support requests.',
			'Project GitHub page: <a href="https://github.com/ButTaiwan/writemyfont" target="_blank">View Source Code</a>.'
		],
		
		// 消息文本
		findMsg: 'Enter character to search:',
		notFound: 'Character not found!',
		confirmAdd: 'Would you like to add it to the User List?',
		noDataToExport: 'No data to export.',
		importConfirm: 'Are you sure you want to import data? All current unsaved edits will be overwritten.',
		importDone: 'Import completed.',
		clearConfirm: 'Are you sure you want to clear all drawn characters?',
		clearDone: 'Cleared.',
		inAppNotice: 'Please open in system browser for the best experience.',
		customList: 'User List',
		
		// 导入字表功能
		importFromText: 'Import List from Text',
		importTextLabel: 'Input Text',
		importTextPlaceholder: 'Paste or type characters to import...',
		importTextButton: 'Import to User List',
		importTextNote: 'Duplicate characters will be filtered out, and new characters will be appended to the User List.',
		importTextSuccess: 'Successfully imported {0} characters to the User List',
		importTextDuplicate: 'Filtered {0} duplicates',
		
		// 预览功能
		previewFont: 'Preview Font',
		openPreviewButton: 'Open Preview',
		previewTextLabel: 'Preview Text',
		previewTextPlaceholder: 'Type text to preview...',
		previewButton: 'Preview',
		previewNote: 'Only displays written characters',
		previewFontSize: 'Font Size',
		previewLineHeight: 'Line Height',
		previewClear: 'Clear',
		previewLetterSpacing: 'Letter Spacing',
		
		// 字表名称
		glyphListNames: {
			'基礎字': 'Base Glyphs',
			'簡體常用字': 'Simplified CJK Common',
			'簡體常用字#1': 'Simplified CJK #1',
			'簡體常用字#2': 'Simplified CJK #2',
			'簡體常用字#3': 'Simplified CJK #3',
			'簡體常用字#4': 'Simplified CJK #4',
			'簡體常用字#5': 'Simplified CJK #5',
			'簡體常用字#6': 'Simplified CJK #6',
			'簡體常用字#7': 'Simplified CJK #7',
			'繁體字': 'Traditional CJK',
			'基本包-漢字#1': 'Basic CJK #1',
			'基本包-漢字#2': 'Basic CJK #2',
			'基本包-漢字#3': 'Basic CJK #3',
			'基本包-漢字#4': 'Basic CJK #4',
			'基本包-漢字#5': 'Basic CJK #5',
			'基本包-漢字#6': 'Basic CJK #6',
			'基本包-漢字#7': 'Basic CJK #7',
			'基本包-漢字#8': 'Basic CJK #8',
			'基本包-漢字#9': 'Basic CJK #9',
			'基本包-漢字#10': 'Basic CJK #10',
			'基本包-漢字#11': 'Basic CJK #11',
			'基本包-漢字#12': 'Basic CJK #12',
			'基本包-漢字#13': 'Basic CJK #13',
			'基本包-漢字#14': 'Basic CJK #14',
			'基本包-漢字#15': 'Basic CJK #15',
			'基本包-符號': 'Basic Symbols',
			'本土包-漢字#1': 'Local CJK #1',
			'本土包-漢字#2': 'Local CJK #2',
			'本土包-符號': 'Local Symbols',
			'日文包-漢字#1': 'Japanese CJK #1',
			'日文包-漢字#2': 'Japanese CJK #2',
			'日文包-符號': 'Japanese Symbols',
			'粵語包-漢字': 'Cantonese CJK',
			'命名包-漢字#1': 'Naming CJK #1',
			'命名包-漢字#2': 'Naming CJK #2',
			'補充符號包': 'Supplemental Symbols',
			'附表：台文全羅': 'Taiwanese Romanization',
			'附表：心經': 'Heart Sutra'
		}
	},
	// 简体中文
	'zh-CN': {
		title: '手写字体生成器',
		appTitle: '手写字体生成器',
		downloadButtonText: '下载字体',
		listLabel: '字表：',
		charSeqLabel: '字符列表',
		charUnit: '字',
		welcomeTitle: '欢迎使用手写字体生成器！',
		settingsTitle: '字体设置',
		downloadTitle: '下载',
		hintTitle: '提示',
		
		// 按钮文字
		findButton: '🔍',
		prevButton: '👈',
		nextButton: '👉',
		clearButton: '🚮',
		moveLeftButton: '⬅️',
		moveRightButton: '➡️',
		moveUpButton: '⬆️',
		moveDownButton: '⬇️',
		undoButton: '↩️',
		hintButton: '💡',
		settingButton: '⚙️',
		downloadButton: '💾',
		langButton: '🌐',
		
		// 设置页面
		spanWelcome: '开始书写前，请先设置基本信息。这些设置之后都可以修改。<br>提示：如果您在App内置浏览器中打开，建议切换到系统浏览器，以防数据丢失！',
		fontNameEngLabel: '字体英文名称',
		fontNameEngPlaceholder: '输入英文名称',
		fontNameCJKLabel: '字体中文名称',
		fontNameCJKPlaceholder: '输入中文名称',
		scaleRateLabel: '书写框缩放',
		scaleRateNote: '调整书写框大小。写字时容易写小，可以缩小框来放大字体。',
		canvasSizeLabel: '画布显示大小',
		canvasSizeNote: '调整画布在屏幕上的显示大小，不影响实际输出的字体。',
		gridTypeLabel: '背景格线样式',
		gridTypes: {
			'3x3grid': '九宫格',
			'3x3grid-new': '新九宫格',
			'2x2grid': '田字格',
			'stargrid': '米字格',
			'boxgrid': '回字格',
			'nogrid': '无格线（仅字身框）'
		},
		showBaselineLabel: '显示基线参考线',
		showBaselineNote: '基线参考线位于字框下方 3/4 处，主要用于对齐半角字符。',
		noFixedWidthLabel: '中文字符不等宽',
		noFixedWidthNote: '不等宽更接近手写效果，但可能不适合竖排文本。',
		pressureEffectLabel: '笔压效果（实验性功能）',
		pressureEffects: {
			'none': '原始值',
			'contrast': '加大对比',
			'enhance': '增强（省力）',
			'enhancex': '再增强（更省力）'
		},
		pressureEffectNote: '仅对支持压感的设备有效。此功能仍在调整中，未来版本可能不兼容。',
		penAngleModeLabel: '启用触控笔倾斜角',
		penAngleModeNote: '此选项仅对支持倾斜角的设备有效。',
		pressureDrawingLabel: '使用旧版笔压模式（不推荐）',
		pressureDrawingNote: '旧版笔压模式不支持笔刷功能。',
		clearAllLabel: '清空所有字体数据',
		clearAllButton: '清空字体数据（此操作不可恢复！）',
		exportEventsLabel: '导出系统事件（开发用）',
		exportEventsButton: '导出系统事件',
		resetSettingsLabel: '重置所有设置',
		resetSettingsButton: '将配置还原至默认值',
		resetSettingsConfirm: '确定要将所有设置还原为默认值吗？字形数据不会被删除。',
		resetSettingsDone: '设置已还原。',
		
		// 下载页面
		saveAsTesterLabel: '测试输出',
		saveAsTesterNote: '勾选后字体名称会添加序号，避免系统缓存导致字体无法正常安装。',
		downloadFontButton: '下载字体文件（OTF格式）',
		donateTitle: '支持作者',
		donateText: '生成的字体文件完全属于您。如果这个工具对您有帮助，欢迎通过<a href="https://www.paypal.com/paypalme/buttaiwan" target="_blank">PayPal</a>或<a href="https://p.ecpay.com.tw/930AED7" target="_blank">绿界支付</a>支持作者。您的支持将帮助我们持续改进！',
		importDataLabel: '导入备份数据',
		exportDataLabel: '导出当前数据',
		exportDataButton: '备份字体数据',
		
		// 提示内容
		hintContent: [
			'字表来源于「<a href="https://justfont.com/jf7000" target="_blank">jf7000常用字集</a>」。',
			'所有数据存储在浏览器本地，建议定期使用导出功能备份，防止数据丢失。',
			'建议每写完一个字就调整位置（汉字通常居中），这样比事后批量调整更方便。',
			'半角字符按比例宽度输出，水平位置会被忽略。红线标示基线参考位置。',
			'全角英数字会自动从半角字符生成。',
			'当必需字符齐全时，系统会自动处理竖排和组合字符设置。',
			'注意：由于技术限制，生成的OTF文件虽可安装使用，但非标准CID格式，可能在Adobe软件中无法正确识别为CJK字体。',
			'本服务生成的字体文件若造成任何问题，本服务及作者不承担责任。',
			'本系统不收集任何用户笔迹或个人信息。公开字体文件前请自行评估风险。',
			'本工具不定期更新，尽力保持版本兼容，但维护多版本有困难。所有代码开源在GitHub，有技术需求可联系作者（可能收费）。',
			'项目GitHub页面：<a href="https://github.com/ButTaiwan/writemyfont" target="_blank">查看源代码</a>。'
		],
		
		// 消息文本
		findMsg: '请输入要查找的文字：',
		notFound: '找不到该字符！',
		confirmAdd: '是否添加到用户字表？',
		noDataToExport: '没有可导出的数据。',
		importConfirm: '确定要导入数据吗？当前编辑的所有数据将被清除。',
		importDone: '导入完成。',
		clearConfirm: '确定要清除所有已书写的字符吗？',
		clearDone: '已清除。',
		inAppNotice: '请使用设备浏览器打开以获得最佳体验。',
		customList: '用户字表',
		
		// 导入字表功能
		importFromText: '从文本导入字表',
		importTextLabel: '输入文本',
		importTextPlaceholder: '在此粘贴或输入要导入的文字...',
		importTextButton: '导入到用户字表',
		importTextNote: '系统会自动去除重复字符，并将字符添加到用户字表。',
		importTextSuccess: '成功导入 {0} 个字符到用户字表',
		importTextDuplicate: '已去重 {0} 个字符',
		
		// 预览功能
		previewFont: '预览字体',
		openPreviewButton: '打开字体预览',
		previewTextLabel: '输入预览文字',
		previewTextPlaceholder: '输入要预览的文字...',
		previewButton: '预览',
		previewNote: '仅显示已书写的字符',
		previewFontSize: '字号',
		previewLineHeight: '行高',
		previewClear: '清空',
		previewLetterSpacing: '字间距',
		
		// 字表名称
		glyphListNames: {
			'基礎字': '基础字',
			'簡體常用字': '简体常用字',
			'簡體常用字#1': '简体常用字#1',
			'簡體常用字#2': '简体常用字#2',
			'簡體常用字#3': '简体常用字#3',
			'簡體常用字#4': '简体常用字#4',
			'簡體常用字#5': '简体常用字#5',
			'簡體常用字#6': '简体常用字#6',
			'簡體常用字#7': '简体常用字#7',
			'繁體字': '繁体字',
			'基本包-漢字#1': '基本包-汉字#1',
			'基本包-漢字#2': '基本包-汉字#2',
			'基本包-漢字#3': '基本包-汉字#3',
			'基本包-漢字#4': '基本包-汉字#4',
			'基本包-漢字#5': '基本包-汉字#5',
			'基本包-漢字#6': '基本包-汉字#6',
			'基本包-漢字#7': '基本包-汉字#7',
			'基本包-漢字#8': '基本包-汉字#8',
			'基本包-漢字#9': '基本包-汉字#9',
			'基本包-漢字#10': '基本包-汉字#10',
			'基本包-漢字#11': '基本包-汉字#11',
			'基本包-漢字#12': '基本包-汉字#12',
			'基本包-漢字#13': '基本包-汉字#13',
			'基本包-漢字#14': '基本包-汉字#14',
			'基本包-漢字#15': '基本包-汉字#15',
			'基本包-符號': '基本包-符号',
			'本土包-漢字#1': '本土包-汉字#1',
			'本土包-漢字#2': '本土包-汉字#2',
			'本土包-符號': '本土包-符号',
			'日文包-漢字#1': '日文包-汉字#1',
			'日文包-漢字#2': '日文包-汉字#2',
			'日文包-符號': '日文包-符号',
			'粵語包-漢字': '粤语包-汉字',
			'命名包-漢字#1': '命名包-汉字#1',
			'命名包-漢字#2': '命名包-汉字#2',
			'補充符號包': '补充符号包',
			'附表：台文全羅': '附录：台文全罗',
			'附表：心經': '附录：心经'
		}
	},
	
	// 繁体中文
	'zh-TW': {
		title: '手寫字型產生器',
		appTitle: '手寫字型產生器',
		downloadButtonText: '下載字型',
		listLabel: '字表：',
		charSeqLabel: '字符列表',
		charUnit: '字',
		welcomeTitle: '歡迎使用手寫字型產生器！',
		settingsTitle: '字型設定',
		downloadTitle: '下載',
		hintTitle: '提示',
		
		findButton: '🔍',
		prevButton: '👈',
		nextButton: '👉',
		clearButton: '🚮',
		moveLeftButton: '⬅️',
		moveRightButton: '➡️',
		moveUpButton: '⬆️',
		moveDownButton: '⬇️',
		undoButton: '↩️',
		hintButton: '💡',
		settingButton: '⚙️',
		downloadButton: '💾',
		langButton: '🌐',
		
		spanWelcome: '在開始書寫之前，先來設定一些基本資訊吧！這些設定值之後都能再更改。<br>提醒您，若您是在App內的瀏覽器開啟本頁，建議用系統瀏覽器開啟，避免資料遺失！',
		fontNameEngLabel: '字型英文名稱',
		fontNameEngPlaceholder: '請輸入英文名稱',
		fontNameCJKLabel: '字型中文名稱',
		fontNameCJKPlaceholder: '請輸入中文名稱',
		scaleRateLabel: '縮放率',
		scaleRateNote: '手寫時為了避免超框，容易不經意把字寫得偏小。這裡可以調整文字框的尺寸。',
		smallModeLabel: '我的字就是小',
		smallModeNote: '適合寫字真的很小的人。',
		gridTypeLabel: '背景格線樣式',
		gridTypes: {
			'3x3grid': '九宮格',
			'3x3grid-new': '新九宮格',
			'2x2grid': '田字格',
			'stargrid': '米字格',
			'boxgrid': '回字格',
			'nogrid': '無格線（僅字身框）'
		},
		showBaselineLabel: '顯示基線參考線',
		showBaselineNote: '基線參考線位於字框下方 3/4 處，主要用於對齊半形字符。',
		noFixedWidthLabel: '中文字不等寬',
		noFixedWidthNote: '設定為不等寬會更像手寫字型，但可能不適合用於直排。',
		pressureEffectLabel: '筆壓敏感度（實驗中）',
		pressureEffects: {
			'none': '原始值',
			'contrast': '加大對比',
			'enhance': '增強（省力）',
			'enhancex': '再增強（更省力）'
		},
		pressureEffectNote: '本選項僅對有筆壓的設備有效。目前尚在調整中，未來修改可能無法維持舊版相容性。',
		penAngleModeLabel: '啟用觸控筆傾斜角',
		penAngleModeNote: '本選項僅對有傾斜角的設備有效。',
		pressureDrawingLabel: '啟用舊筆壓模式（不建議）',
		pressureDrawingNote: '舊筆壓模式無法支援筆刷功能。',
		clearAllLabel: '完全清除字型資料',
		clearAllButton: '清除字型資料（無法復原！）',
		exportEventsLabel: '匯出系統事件（開發用）',
		exportEventsButton: '匯出系統事件',
		resetSettingsLabel: '重置所有設定',
		resetSettingsButton: '將配置還原至預設值',
		resetSettingsConfirm: '確定要將所有設定還原為預設值嗎？已書寫的字型資料不會被刪除。',
		resetSettingsDone: '設定已還原。',
		
		saveAsTesterLabel: '測試輸出',
		saveAsTesterNote: '勾選測試輸出，字型名稱會加上流水號。避免系統快取造成在電腦上無法正常安裝使用的問題。',
		downloadFontButton: '下載字型OTF檔案',
		donateTitle: '斗內作者',
		donateText: '字型檔的權利均屬於您個人，不過如果您喜歡這個工具，請<a href="https://p.ecpay.com.tw/930AED7" target="_blank">考慮斗內支持作者的開發工作</a>。您的支持將有助於未來的更新和改進！',
		importDataLabel: '匯入先前備份的資料',
		exportDataLabel: '匯出編輯中資料',
		exportDataButton: '備份工作中的字型資料',
		
		hintContent: [
			'書寫的字表來自「<a href="https://justfont.com/jf7000" target="_blank">jf7000當務字集</a>」。',
			'由於所有資料儲存在您瀏覽器本地端，若擔心被瀏覽器清除，建議定期用匯出功能備份資料。',
			'建議每個字寫好後，就立刻調整位置（漢字原則上置中），這樣可避免事後調整困難。',
			'半形文字一律輸出成比例寬，故水平方向位置會被忽略。背景的紅線是基線的參考位置。',
			'全形的英數字會使用半形英數字自動產生。',
			'當所需的字符齊全時，系統會自動處理直排、組合文字的設定。',
			'請注意因為技術的限制，目前本系統所產生的OTF檔案，雖可勉強安裝運作，但並非正確的CID格式，可能在Adobe軟體無法正確識別為CJK字型。',
			'本服務所生成的字型檔，若使用上造成任何影響，本服務與作者不負任何責任。',
			'本系統並未蒐集任何使用者筆跡或其他用戶資訊。但若要公開您的字型檔時，請自行評估筆跡公開的風險。',
			'本工具不定期更新，雖然力求盡可能支援先前的版本，但要維護多種舊機制相各種環境有所困難，難以盡善盡美。由於所有版本程式碼都是開源的，可自行從GitHub上使用。若有技術支援需求，可與作者聯絡（可能須付費）。',
			'本專案GitHub頁面在<a href="https://github.com/ButTaiwan/writemyfont" target="_blank">這裡</a>，在此可查閱更多資訊。'
		],
		
		findMsg: '請輸入要找的文字：',
		notFound: '查無此字符！',
		confirmAdd: '請問要新增到使用者字表嗎？',
		noDataToExport: '沒有可匯出的資料。',
		importConfirm: '確定要匯入資料嗎？這將清除目前編輯中的所有資料。',
		importDone: '匯入完成。',
		clearConfirm: '確定要清除所有寫過的字嗎？',
		clearDone: '已清除。',
		inAppNotice: '請使用裝置瀏覽器開啟以獲得最佳使用體驗。',
		customList: '使用者字表',
		
		// 导入字表功能
		importFromText: '從文字匯入字表',
		importTextLabel: '輸入文字',
		importTextPlaceholder: '在此貼上或輸入要匯入的文字...',
		importTextButton: '匯入到使用者字表',
		importTextNote: '系統會自動去除重複字符，並將字符添加到使用者字表中。',
		importTextSuccess: '成功匯入 {0} 個字符到使用者字表',
		importTextDuplicate: '已去重 {0} 個字符',
		
		// 预览功能
		previewFont: '預覽字型',
		openPreviewButton: '開啟字型預覽',
		previewTextLabel: '輸入預覽文字',
		previewTextPlaceholder: '輸入要預覽的文字...',
		previewButton: '預覽',
		previewNote: '僅顯示已書寫的字符',
		previewFontSize: '字號',
		previewLineHeight: '行高',
		previewClear: '清空',
		previewLetterSpacing: '字間距',
		
		// 字表名稱
		glyphListNames: {
			'基礎字': '基礎字',
			'簡體常用字': '簡體常用字',
			'簡體常用字#1': '簡體常用字#1',
			'簡體常用字#2': '簡體常用字#2',
			'簡體常用字#3': '簡體常用字#3',
			'簡體常用字#4': '簡體常用字#4',
			'簡體常用字#5': '簡體常用字#5',
			'簡體常用字#6': '簡體常用字#6',
			'簡體常用字#7': '簡體常用字#7',
			'繁體字': '繁體字',
			'基本包-漢字#1': '基本包-漢字#1',
			'基本包-漢字#2': '基本包-漢字#2',
			'基本包-漢字#3': '基本包-漢字#3',
			'基本包-漢字#4': '基本包-漢字#4',
			'基本包-漢字#5': '基本包-漢字#5',
			'基本包-漢字#6': '基本包-漢字#6',
			'基本包-漢字#7': '基本包-漢字#7',
			'基本包-漢字#8': '基本包-漢字#8',
			'基本包-漢字#9': '基本包-漢字#9',
			'基本包-漢字#10': '基本包-漢字#10',
			'基本包-漢字#11': '基本包-漢字#11',
			'基本包-漢字#12': '基本包-漢字#12',
			'基本包-漢字#13': '基本包-漢字#13',
			'基本包-漢字#14': '基本包-漢字#14',
			'基本包-漢字#15': '基本包-漢字#15',
			'基本包-符號': '基本包-符號',
			'本土包-漢字#1': '本土包-漢字#1',
			'本土包-漢字#2': '本土包-漢字#2',
			'本土包-符號': '本土包-符號',
			'日文包-漢字#1': '日文包-漢字#1',
			'日文包-漢字#2': '日文包-漢字#2',
			'日文包-符號': '日文包-符號',
			'粵語包-漢字': '粵語包-漢字',
			'命名包-漢字#1': '命名包-漢字#1',
			'命名包-漢字#2': '命名包-漢字#2',
			'補充符號包': '補充符號包',
			'附表：台文全羅': '附表：台文全羅',
			'附表：心經': '附表：心經'
		}
	},
	
	// 日语
	'ja': {
		title: 'フォントを書こう！',
		appTitle: 'フォントを書こう！',
		downloadButtonText: 'ダウンロード',
		listLabel: '範囲：',
		charSeqLabel: 'グリフ一覧',
		charUnit: '字',
		welcomeTitle: 'ようこそ',
		settingsTitle: 'フォント設定',
		downloadTitle: 'ダウンロード',
		hintTitle: 'ヒント',
		
		findButton: '🔍',
		prevButton: '👈',
		nextButton: '👉',
		clearButton: '🚮',
		moveLeftButton: '⬅️',
		moveRightButton: '➡️',
		moveUpButton: '⬆️',
		moveDownButton: '⬇️',
		undoButton: '↩️',
		hintButton: '💡',
		settingButton: '⚙️',
		downloadButton: '💾',
		langButton: '🌐',
		
		spanWelcome: 'まずはフォントの基本情報を設定しましょう！<br>アプリの組み込みブラウザを利用している場合は、データ紛失を避けるためシステムブラウザで開いてください。',
		fontNameEngLabel: 'フォント名（英語）',
		fontNameEngPlaceholder: '半角英数字で入力してください',
		fontNameCJKLabel: 'フォント名（日本語）',
		fontNameCJKPlaceholder: '日本語フォント名を入力してください',
		scaleRateLabel: '拡大率',
		scaleRateNote: '手書きの場合、枠をはみ出さないように書くと、どうしても文字がやや小さくなりがちですが、拡大率を設定して文字枠のサイズを調整できます。',
		smallModeLabel: '小さく書きたい！',
		smallModeNote: 'マジで文字が小さい人にどうぞ。',
		gridTypeLabel: '背景スタイル',
		gridTypes: {
			'3x3grid': '3x3セル',
			'3x3grid-new': '3x3セル（フトコロ大きく）',
			'2x2grid': '2x2セル',
			'stargrid': '米印セル',
			'boxgrid': '字面セル',
			'nogrid': '無地（仮想ボディーのみ）'
		},
		showBaselineLabel: 'ベースライン参考線を表示',
		showBaselineNote: 'ベースライン参考線は文字枠の下方 3/4 の位置にあり、主に半角文字の配置に使用されます。',
		noFixedWidthLabel: '全角文字もプロポーショナル幅',
		noFixedWidthNote: '手書きフォントの性格上、固定幅よりもプロポーショナル幅の方が自然に見える場合がありますが、縦書きとしての利用に不向きです。',
		pressureEffectLabel: '筆圧感度（実験中）',
		pressureEffects: {
			'none': '元の値',
			'contrast': 'コントラストを強調',
			'enhance': '増幅（省力化）',
			'enhancex': '再増幅（もっと省力化）'
		},
		pressureEffectNote: 'このオプションは筆圧対応デバイスでのみ有効です。現在調整中であり、将来的な変更により旧バージョンとの互換性が維持されない可能性があります。',
		penAngleModeLabel: 'スタイラスペンの傾き検知を有効にする',
		penAngleModeNote: 'このオプションは傾き検知に対応したデバイスのみ有効です。',
		pressureDrawingLabel: '旧筆圧モードの有効化（非推奨）',
		pressureDrawingNote: '旧筆圧モードはブラシに対応しません。',
		clearAllLabel: 'フォントデータを削除する',
		clearAllButton: '全てのデータを削除（復元不能！）',
		exportEventsLabel: 'システムデバッグ用機能',
		exportEventsButton: 'システムイベントエクスポート',
		resetSettingsLabel: '設定のリセット',
		resetSettingsButton: '設定を初期値に戻す',
		resetSettingsConfirm: 'すべての設定を初期値に戻しますか？書かれたフォントデータは削除されません。',
		resetSettingsDone: '設定をリセットしました。',
		
		saveAsTesterLabel: 'テスト出力',
		saveAsTesterNote: 'テスト出力モードでは、フォント名に通し番号がつけられます。パソコンのフォントキャッシュによるインストールや使用の不具合を避けることができます。',
		downloadFontButton: 'OTFファイルダウンロード',
		donateTitle: '寄付のお願い',
		donateText: '作成したフォントのあらゆる権利はあなたに属しますが、もしこのツールが役に立ったと感じたら、ぜひ寄付をお願いします！<br><a href="https://www.paypal.com/paypalme/buttaiwan" target="_blank">PayPalはこちら</a>／または<a href="https://p.ecpay.com.tw/930AED7" target="_blank">台湾ドル建てはこちら</a>',
		importDataLabel: 'バックアップデータの読み込み',
		exportDataLabel: 'データをバックアップする',
		exportDataButton: '作業中のデータをDL',
		
		hintContent: [
			'このツールは「<a href="https://x.com/buttaiwan" target="_blank">@buttaiwan</a>」が作りました。',
			'すべてのデータはブラウザに保存されるため、未完成のフォントは定期的にバックアップすることをおすすめします。',
			'文字を書いたら、直ちに位置の調整を行うことをおすすめします。一般的に仮名と漢字は中央揃え、欧文はベースライン揃えです（赤いラインは目安）。',
			'半角文字は自動的にプロポーショナル幅で出力されるため、水平方向の位置は無視されます。',
			'全角の数字やアルファベットなどは、半角のグリフを用いて自動的に生成されます。',
			'横書き用・縦書き用のグリフが両方書かれている場合、縦書きの設定は自動的に行われます。',
			'ダウンロードしたフォントファイルはAirDropなどでパソコンに転送してご利用ください。',
			'生成されたフォントのあらゆる権利は、利用者に属します。公開も商用利用もご自由にどうぞ。',
			'技術的制限上、現在このツールで生成されたOTFファイルは、インストールして利用すること自体は可能ですが、正確なCIDフォーマットではないため、Adobeアプリケーションなどでは日本語フォントとして認識されない恐れがあります。',
			'本システムは、ユーザーの筆跡やその他の情報を収集することはありません。ただし、フォントファイルを公開する場合は、筆跡を公開するリスクはご自身でご判断ください。',
			'本サービスの利用によって、利用者および第三者に生じた損害について、サービス提供者は責任を負わないものとします。',
			'本サービスは不定期に更新します。できるだけ互換性をキープしますが、全てのブラウザ・デバイスをカバーすることが不可能です。技術サポートは可能だが内容によっては有料です。',
			'プロジェクト<a href="https://github.com/ButTaiwan/writemyfont" target="_blank">GitHubページ</a>にもご参照ください。'
		],
		
		findMsg: '探したい文字をご入力ください：',
		notFound: '該当グリフが見つかりません。',
		confirmAdd: 'ユーザー文字リストに追加しますか？',
		noDataToExport: 'データがありません。',
		importConfirm: '編集中のデータが削除されます。データの読み込みしますか？',
		importDone: '読み込みしました',
		clearConfirm: '編集中のデータを破棄しますか？',
		clearDone: '削除しました',
		inAppNotice: 'アプリの組み込みブラウザを利用しているようです。\nシステムブラウザで開くことがおすすめです。',
		customList: 'ユーザー文字リスト',
		
		// 导入字表功能
		importFromText: 'テキストから文字をインポート',
		importTextLabel: 'テキスト入力',
		importTextPlaceholder: 'インポートしたいテキストを貼り付けまたは入力...',
		importTextButton: 'ユーザー文字リストにインポート',
		importTextNote: '重複した文字は自動的に除外され、ユーザー文字リストに追加されます。',
		importTextSuccess: '{0} 文字をユーザー文字リストにインポートしました',
		importTextDuplicate: '{0} 文字を重複削除しました',
		
		// 预览功能
		previewFont: 'フォントプレビュー',
		openPreviewButton: 'プレビューを開く',
		previewTextLabel: 'プレビューテキスト',
		previewTextPlaceholder: 'プレビューしたいテキストを入力...',
		previewButton: 'プレビュー',
		previewNote: '書かれた文字のみ表示されます',
		previewFontSize: 'フォントサイズ',
		previewLineHeight: '行の高さ',
		previewClear: 'クリア',
		previewLetterSpacing: '文字間隔',
		
		// 字表名称
		glyphListNames: {
			'基礎字': '基本セット',
			'簡體常用字': '簡体常用字セット',
			'簡體常用字#1': '簡体常用字セット #1',
			'簡體常用字#2': '簡体常用字セット #2',
			'簡體常用字#3': '簡体常用字セット #3',
			'簡體常用字#4': '簡体常用字セット #4',
			'簡體常用字#5': '簡体常用字セット #5',
			'簡體常用字#6': '簡体常用字セット #6',
			'簡體常用字#7': '簡体常用字セット #7',
			'繁體字': '繁体字セット',
			'基本包-漢字#1': '基本漢字パック #1',
			'基本包-漢字#2': '基本漢字パック #2',
			'基本包-漢字#3': '基本漢字パック #3',
			'基本包-漢字#4': '基本漢字パック #4',
			'基本包-漢字#5': '基本漢字パック #5',
			'基本包-漢字#6': '基本漢字パック #6',
			'基本包-漢字#7': '基本漢字パック #7',
			'基本包-漢字#8': '基本漢字パック #8',
			'基本包-漢字#9': '基本漢字パック #9',
			'基本包-漢字#10': '基本漢字パック #10',
			'基本包-漢字#11': '基本漢字パック #11',
			'基本包-漢字#12': '基本漢字パック #12',
			'基本包-漢字#13': '基本漢字パック #13',
			'基本包-漢字#14': '基本漢字パック #14',
			'基本包-漢字#15': '基本漢字パック #15',
			'基本包-符號': '基本記号パック',
			'本土包-漢字#1': 'ローカル漢字パック #1',
			'本土包-漢字#2': 'ローカル漢字パック #2',
			'本土包-符號': 'ローカル記号パック',
			'日文包-漢字#1': '日本語漢字パック #1',
			'日文包-漢字#2': '日本語漢字パック #2',
			'日文包-符號': '日本語記号パック',
			'粵語包-漢字': '広東語漢字パック',
			'命名包-漢字#1': '人名漢字パック #1',
			'命名包-漢字#2': '人名漢字パック #2',
			'補充符號包': '追加記号パック',
			'附表：台文全羅': '付録：台湾語全羅',
			'附表：心經': '付録：般若心経'
		}
	}
};

// 获取浏览器语言
function getBrowserLanguage() {
	const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
	if (lang.startsWith('zh-cn') || lang.startsWith('zh-hans')) {
		return 'zh-CN';
	} else if (lang.startsWith('zh-tw') || lang.startsWith('zh-hant') || lang.startsWith('zh-hk')) {
		return 'zh-TW';
	} else if (lang.startsWith('ja')) {
		return 'ja';
	} else if (lang.startsWith('en')) {
		return 'en';
	}
	// 默认返回英文
	return 'en';
}

// 获取或设置当前语言
function getCurrentLanguage() {
	const saved = localStorage.getItem('fdrawer_language');
	if (saved && i18n[saved]) {
		return saved;
	}
	return getBrowserLanguage();
}

function setLanguage(lang) {
	if (i18n[lang]) {
		localStorage.setItem('fdrawer_language', lang);
		location.reload();
	}
}

// 获取翻译文本
function t(key) {
	const lang = getCurrentLanguage();
	const texts = i18n[lang];
	return texts[key] || key;
}

// 获取字表名称
function getGlyphListName(listKey) {
	const lang = getCurrentLanguage();
	const texts = i18n[lang];
	if (texts && texts.glyphListNames && texts.glyphListNames[listKey]) {
		return texts.glyphListNames[listKey];
	}
	return listKey;
}

// 翻译字符分类名称/注释
function translateGlyphNote(n) {
	if (!n) return '';
	const lang = getCurrentLanguage();
	if (lang === 'zh-TW') return n;
	
	if (lang === 'en') {
		const enMap = {
			'小寫字母': 'Lowercase Letters',
			'大寫字母': 'Uppercase Letters',
			'數字': 'Numbers',
			'平假名': 'Hiragana',
			'片假名': 'Katakana',
			'注音符號': 'Bopomofo',
			'心經': 'Heart Sutra',
			'希臘字母': 'Greek Letters',
			'希臘文': 'Greek',
			'白話字': 'Pe̍h-ōe-jī (POJ)',
			'客語白話字': 'Hakka POJ',
			'白話字/漢拼': 'POJ / Pinyin',
			'台羅/白話字': 'Tailo / POJ',
			'台羅/白話字/漢拼': 'Tailo / POJ / Pinyin',
			'漢拼': 'Hanyu Pinyin',
			'方音符號': 'Minnan Phonetic Symbols',
			'客語調號': 'Hakka Tone Marks',
			'注音二聲': 'Bopomofo Tone 2',
			'注音三聲': 'Bopomofo Tone 3',
			'注音四聲': 'Bopomofo Tone 4',
			'注音輕聲': 'Bopomofo Neutral Tone',
			'馬祖福州話': 'Matsu Fuzhou Dialect',
			'族語': 'Formosan Languages',
			'度': 'Degrees',
			'角': 'Angle',
			'中點': 'Middle Dot',
			'乘號': 'Multiplication Sign',
			'米號': 'Asterisk',
			'商標': 'Trademark',
			'箭頭': 'Arrow',
			'直角': 'Right Angle',
			'平行': 'Parallel',
			'交集': 'Intersection',
			'聯集': 'Union',
			'積分': 'Integral',
			'所以': 'Therefore',
			'因為': 'Because',
			'全等': 'Congruent',
			'雙圈': 'Double Circle',
			'重複': 'Repetitive',
			'長音': 'Macron (Long Vowel)',
			'章節號': 'Section Sign',
			'版權號': 'Copyright Sign',
			'中黑點': 'Middle Dot',
			'省略號': 'Ellipsis',
			'音界號': 'Word Separator',
			'千分號': 'Per Mille Sign',
			'反撇號': 'Backtick',
			'雙問號': 'Double Question',
			'平方根': 'Square Root',
			'無限大': 'Infinity',
			'約等於': 'Approximately Equal',
			'不等於': 'Not Equal',
			'表格線': 'Table Border',
			'波浪號': 'Tilde',
			'美分符號': 'Cent Sign',
			'英鎊符號': 'Pound Sign',
			'日圓符號': 'Yen Sign',
			'註冊商標': 'Registered Trademark',
			'雙驚嘆號': 'Double Exclamation',
			'歐元符號': 'Euro Sign',
			'攝氏符號': 'Celsius Sign',
			'華氏符號': 'Fahrenheit Sign',
			'羅馬數字': 'Roman Numerals',
			'全形斜線': 'Full-width Slash',
			'環路積分': 'Contour Integral',
			'小於大於': 'Less/Greater Than',
			'大於等於': 'Greater Than or Equal',
			'垂直記號': 'Perpendicular',
			'製圖符號': 'Drafting Symbols',
			'實心圓形': 'Solid Circle',
			'空心圓形': 'Outline Circle',
			'實心方形': 'Solid Square',
			'空心方形': 'Outline Square',
			'實心菱形': 'Solid Diamond',
			'空心菱形': 'Outline Diamond',
			'實心星號': 'Solid Star',
			'空心星號': 'Outline Star',
			'實心心號': 'Solid Heart',
			'空心心號': 'Outline Heart',
			'重複漢字': 'Repetitive Hanzi',
			'半形 And': 'Half-width Ampersand',
			'半形And': 'Half-width Ampersand',
			'半形雙引號': 'Half-width Double Quote',
			'半形單引號': 'Half-width Single Quote',
			'半形驚嘆號': 'Half-width Exclamation Mark',
			'半形井號': 'Half-width Hash',
			'半形錢號': 'Half-width Dollar Sign',
			'半形百分號': 'Half-width Percent',
			'半形傻瓜引號': 'Half-width Neutral Quote',
			'半形括號': 'Half-width Parenthesis',
			'半形星號': 'Half-width Asterisk',
			'半形加號': 'Half-width Plus',
			'半形逗號': 'Half-width Comma',
			'半形減號/連字號': 'Half-width Hyphen',
			'半形句點': 'Half-width Period',
			'半形正斜線': 'Half-width Slash',
			'半形冒號': 'Half-width Colon',
			'半形分號': 'Half-width Semicolon',
			'半形小於': 'Half-width Less Than',
			'半形等號': 'Half-width Equal',
			'半形大於': 'Half-width Greater Than',
			'半形問號': 'Half-width Question Mark',
			'半形中括號': 'Half-width Bracket',
			'半形倒斜線': 'Half-width Backslash',
			'半形抑揚符': 'Half-width Caret',
			'半形底線': 'Half-width Underscore',
			'半形重音符': 'Half-width Backtick',
			'半形大括號': 'Half-width Brace',
			'半形垂直線': 'Half-width Vertical Bar',
			'半形波浪號': 'Half-width Tilde'
		};
		if (enMap[n]) return enMap[n];
		
		let res = n;
		res = res.replace(/半形/g, 'Half-width ')
		         .replace(/全形/g, 'Full-width ')
		         .replace(/字母/g, 'Letters')
		         .replace(/驚嘆號/g, 'Exclamation')
		         .replace(/問號/g, 'Question')
		         .replace(/括引號/g, 'Brackets/Quotes')
		         .replace(/括號/g, 'Brackets')
		         .replace(/引號/g, 'Quotes')
		         .replace(/逗號/g, 'Comma')
		         .replace(/句點/g, 'Period')
		         .replace(/頓號/g, 'Ideographic Comma')
		         .replace(/斜線/g, 'Slash')
		         .replace(/直排相容/g, 'Vertical Layout Compatible')
		         .replace(/希臘/g, 'Greek')
		         .replace(/符號/g, 'Symbol')
		         .replace(/數字/g, 'Numbers')
		         .replace(/羅馬/g, 'Roman')
		         .replace(/俄文/g, 'Cyrillic')
		         .replace(/日文/g, 'Japanese')
		         .replace(/注音/g, 'Bopomofo')
		         .replace(/空心/g, 'Outline ')
		         .replace(/實心/g, 'Solid ')
		         .replace(/圓形/g, 'Circle')
		         .replace(/方形/g, 'Square')
		         .replace(/菱形/g, 'Diamond')
		         .replace(/三角形/g, 'Triangle')
		         .replace(/星號/g, 'Star')
		         .replace(/心號/g, 'Heart');
		return res;
	}
	
	if (lang === 'zh-CN') {
		let res = n;
		// 替换半形和全形为半角和全角，避免误伤圆形、三角形等
		res = res.replace(/半形/g, '半角')
		         .replace(/全形/g, '全角');
		         
		// 替换其他繁体字
		res = res.replace(/寫/g, '写')
		         .replace(/號/g, '号')
		         .replace(/數/g, '数')
		         .replace(/體/g, '体')
		         .replace(/線/g, '线')
		         .replace(/雙/g, '双')
		         .replace(/錢/g, '钱')
		         .replace(/減/g, '减')
		         .replace(/點/g, '点')
		         .replace(/橫/g, '横')
		         .replace(/直/g, '竖')
		         .replace(/簡/g, '简')
		         .replace(/粵/g, '粤')
		         .replace(/擴/g, '扩')
		         .replace(/補/g, '补')
		         .replace(/漢字/g, '汉字')
		         .replace(/符號/g, '符号')
		         .replace(/驚嘆/g, '感叹')
		         .replace(/希臘/g, '希腊')
		         .replace(/白話/g, '白话')
		         .replace(/客語/g, '客语')
		         .replace(/族語/g, '族语')
		         .replace(/調號/g, '调号')
		         .replace(/調/g, '调')
		         .replace(/語/g, '语')
		         .replace(/聲/g, '声')
		         .replace(/輕/g, '轻')
		         .replace(/方音/g, '方音')
		         .replace(/吳語/g, '吴语')
		         .replace(/舊/g, '旧')
		         .replace(/國/g, '国')
		         .replace(/製/g, '制')
		         .replace(/圖/g, '图')
		         .replace(/實/g, '实')
		         .replace(/重複/g, '重复')
		         .replace(/蘇/g, '苏')
		         .replace(/熱/g, '热')
		         .replace(/攝/g, '摄')
		         .replace(/華/g, '华')
		         .replace(/羅/g, '罗')
		         .replace(/學/g, '学')
		         .replace(/運/g, '运')
		         .replace(/圓/g, '圆')
		         .replace(/屬/g, '属')
		         .replace(/與/g, '与')
		         .replace(/開/g, '开')
		         .replace(/關/g, '关')
		         .replace(/邊/g, '边')
		         .replace(/繪/g, '绘')
		         .replace(/標/g, '标')
		         .replace(/註/g, '注')
		         .replace(/劃/g, '划')
		         .replace(/單/g, '单')
		         .replace(/對/g, '对')
		         .replace(/應/g, '应');
		return res;
	}
	
	if (lang === 'ja') {
		const jaMap = {
			'小寫字母': '小文字',
			'大寫字母': '大文字',
			'數字': '数字',
			'平假名': 'ひらがな',
			'片假名': 'カタカナ',
			'注音符號': '注音符号',
			'心經': '般若心経'
		};
		if (jaMap[n]) return jaMap[n];
		
		let res = n;
		res = res.replace(/半形/g, '半角')
		         .replace(/全形/g, '全角')
		         .replace(/字母/g, 'アルファベット')
		         .replace(/驚嘆號/g, '感嘆符')
		         .replace(/問號/g, '疑問符')
		         .replace(/括引號/g, '括弧')
		         .replace(/括號/g, '括弧')
		         .replace(/引號/g, '引用符')
		         .replace(/逗號/g, '読点')
		         .replace(/句點/g, '句点')
		         .replace(/頓號/g, '読点')
		         .replace(/斜線/g, 'スラッシュ')
		         .replace(/直排相容/g, '縦書き用');
		return res;
	}
	return n;
}

// 导出供全局使用
window.i18n = {
	t: t,
	getCurrentLanguage: getCurrentLanguage,
	setLanguage: setLanguage,
	getGlyphListName: getGlyphListName,
	translateGlyphNote: translateGlyphNote,
	languages: {
		'en': 'English',
		'zh-CN': '简体中文',
		'zh-TW': '繁體中文',
		'ja': '日本語'
	}
};
