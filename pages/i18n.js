// 多语言配置
const i18n = {
	// 简体中文
	'zh-CN': {
		title: '手写字体生成器 by 字嗨',
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
		spanWelcome: '在开始书写之前，先来设置一些基本信息吧！这些设置值之后都能再更改。<br>提醒您，若您是在App内的浏览器打开本页，建议用系统浏览器打开，避免数据遗失！',
		fontNameEngLabel: '字体英文名称',
		fontNameEngPlaceholder: '请输入英文名称',
		fontNameCJKLabel: '字体中文名称',
		fontNameCJKPlaceholder: '请输入中文名称',
		scaleRateLabel: '缩放率',
		scaleRateNote: '手写时为了避免超框，容易不经意把字写得偏小。这里可以调整文字框的尺寸。',
		smallModeLabel: '我的字就是小',
		smallModeNote: '适合写字真的很小的人。',
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
		noFixedWidthLabel: '中文字不等宽',
		noFixedWidthNote: '设置为不等宽会更像手写字体，但可能不适合用于直排。',
		pressureEffectLabel: '笔压敏感度（实验中）',
		pressureEffects: {
			'none': '原始值',
			'contrast': '加大对比',
			'enhance': '增强（省力）',
			'enhancex': '再增强（更省力）'
		},
		pressureEffectNote: '本选项仅对有笔压的设备有效。目前尚在调整中，未来修改可能无法维持旧版相容性。',
		pressureDrawingLabel: '启用旧笔压模式（不建议）',
		pressureDrawingNote: '旧笔压模式无法支持笔刷功能。',
		clearAllLabel: '完全清除字体数据',
		clearAllButton: '清除字体数据（无法复原！）',
		exportEventsLabel: '导出系统事件（开发用）',
		exportEventsButton: '导出系统事件',
		
		// 下载页面
		saveAsTesterLabel: '测试输出',
		saveAsTesterNote: '勾选测试输出，字体名称会加上序号。避免系统缓存造成在电脑上无法正常安装使用的问题。',
		downloadFontButton: '下载字体OTF文件',
		donateTitle: '赞助作者',
		donateText: '字体文件的权利均属于您个人，不过如果您喜欢这个工具，请考虑赞助支持作者的开发工作。您的支持将有助于未来的更新和改进！',
		importDataLabel: '导入先前备份的数据',
		exportDataLabel: '导出编辑中数据',
		exportDataButton: '备份工作中的字体数据',
		
		// 提示内容
		hintContent: [
			'本工具由「<a href="https://zi-hi.com" target="_blank">字嗨！</a>」提供。',
			'书写的字表来自「<a href="https://justfont.com/jf7000" target="_blank">jf7000当务字集</a>」。',
			'由于所有数据储存在您浏览器本地端，若担心被浏览器清除，建议定期用导出功能备份数据。',
			'建议每个字写好后，就立刻调整位置（汉字原则上置中），这样可避免事后调整困难。',
			'半形文字一律输出成比例宽，故水平方向位置会被忽略。背景的红线是基线的参考位置。',
			'全形的英数字会使用半形英数字自动产生。',
			'当所需的字符齐全时，系统会自动处理直排、组合文字的设置。',
			'请注意因为技术的限制，目前本系统所产生的OTF文件，虽可勉强安装运作，但并非正确的CID格式，可能在Adobe软件无法正确识别为CJK字体。',
			'本服务所生成的字体文件，若使用上造成任何影响，本服务与作者不负任何责任。',
			'本系统并未搜集任何用户笔迹或其他用户信息。但若要公开您的字体文件时，请自行评估笔迹公开的风险。',
			'本工具不定期更新，虽然力求尽可能支持先前的版本，但要维护多种旧机制相各种环境有所困难，难以尽善尽美。由于所有版本程式码都是开源的，可自行从GitHub上使用。若有技术支持需求，可与作者联络（可能须付费）。',
			'本专案GitHub页面在<a href="https://github.com/ButTaiwan/writemyfont" target="_blank">这里</a>，在此可查阅更多信息。'
		],
		
		// 消息文本
		findMsg: '请输入要找的文字：',
		notFound: '查无此字符！',
		confirmAdd: '请问要新增到用户字表吗？',
		noDataToExport: '没有可导出的数据。',
		importConfirm: '确定要导入数据吗？这将清除目前编辑中的所有数据。',
		importDone: '导入完成。',
		clearConfirm: '确定要清除所有写过的字吗？',
		clearDone: '已清除。',
		inAppNotice: '请使用设备浏览器开启以获得最佳使用体验。',
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
		
		// 字表名称
		glyphListNames: {
			'基礎字': '基础字',
			'簡體常用字': '简体常用字',
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
		title: '手寫字型產生器 by 字嗨',
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
		pressureDrawingLabel: '啟用舊筆壓模式（不建議）',
		pressureDrawingNote: '舊筆壓模式無法支援筆刷功能。',
		clearAllLabel: '完全清除字型資料',
		clearAllButton: '清除字型資料（無法復原！）',
		exportEventsLabel: '匯出系統事件（開發用）',
		exportEventsButton: '匯出系統事件',
		
		saveAsTesterLabel: '測試輸出',
		saveAsTesterNote: '勾選測試輸出，字型名稱會加上流水號。避免系統快取造成在電腦上無法正常安裝使用的問題。',
		downloadFontButton: '下載字型OTF檔案',
		donateTitle: '斗內作者',
		donateText: '字型檔的權利均屬於您個人，不過如果您喜歡這個工具，請<a href="https://p.ecpay.com.tw/930AED7" target="_blank">考慮斗內支持作者的開發工作</a>。您的支持將有助於未來的更新和改進！',
		importDataLabel: '匯入先前備份的資料',
		exportDataLabel: '匯出編輯中資料',
		exportDataButton: '備份工作中的字型資料',
		
		hintContent: [
			'本工具由「<a href="https://zi-hi.com" target="_blank">字嗨！</a>」提供。',
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
		
		// 字表名稱
		glyphListNames: {
			'基礎字': '基礎字',
			'簡體常用字': '簡體常用字',
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
		title: 'フォントを書こう！ by 字嗨',
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
		pressureDrawingLabel: '旧筆圧モードの有効化（非推奨）',
		pressureDrawingNote: '旧筆圧モードはブラシに対応しません。',
		clearAllLabel: 'フォントデータを削除する',
		clearAllButton: '全てのデータを削除（復元不能！）',
		exportEventsLabel: 'システムデバッグ用機能',
		exportEventsButton: 'システムイベントエクスポート',
		
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
		
		// 字表名称
		glyphListNames: {
			'基礎字': '基本セット',
			'簡體常用字': '簡体常用字セット',
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
	const lang = navigator.language || navigator.userLanguage;
	if (lang.startsWith('zh-CN') || lang.startsWith('zh-Hans')) {
		return 'zh-CN';
	} else if (lang.startsWith('zh-TW') || lang.startsWith('zh-Hant') || lang.startsWith('zh-HK')) {
		return 'zh-TW';
	} else if (lang.startsWith('ja')) {
		return 'ja';
	}
	// 默认返回繁体中文
	return 'zh-TW';
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

// 导出供全局使用
window.i18n = {
	t: t,
	getCurrentLanguage: getCurrentLanguage,
	setLanguage: setLanguage,
	getGlyphListName: getGlyphListName,
	languages: {
		'zh-CN': '简体中文',
		'zh-TW': '繁體中文',
		'ja': '日本語'
	}
};
