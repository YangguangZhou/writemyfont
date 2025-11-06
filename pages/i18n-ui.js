// UI 多语言支持脚本
(function() {
	'use strict';
	
	const t = window.i18n.t;
	const currentLang = window.i18n.getCurrentLanguage();
	
	// 等待 DOM 加载完成
	$(document).ready(function() {
		updateUI();
		bindLanguageSwitch();
	});
	
	// 更新界面文本
	function updateUI() {
		// 更新标题
		document.title = t('title');
		
		// 更新主界面
		$('#list-container label[for="listSelect"]').text(t('listLabel'));
		
		// 更新对话框标题
		$('#listup-container h2').text(t('charSeqLabel'));
		$('#hint-container h2').html(t('hintTitle') + ' Ver <span id="version"></span>');
		$('#settings-title').first().text(t('settingsTitle'));
		$('#download-container h2').text(t('downloadTitle'));
		
		// 更新设置页面
		$('#span-welcome').html(t('spanWelcome'));
		
		// 使用更精确的选择器，只选择设置项的note，排除span-welcome
		const $settingsH3 = $('#settings-container h3');
		$settingsH3.eq(0).text(t('fontNameEngLabel'));
		$('#fontNameEng').attr('placeholder', t('fontNameEngPlaceholder'));
		$settingsH3.eq(1).text(t('fontNameCJKLabel'));
		$('#fontNameCJK').attr('placeholder', t('fontNameCJKPlaceholder'));
		$settingsH3.eq(2).text(t('scaleRateLabel'));
		
		const $settingsNotes = $('#settings-container .note').not('#span-welcome');
		$settingsNotes.eq(0).text(t('scaleRateNote'));
		$settingsH3.eq(3).text(t('smallModeLabel'));
		$settingsNotes.eq(1).text(t('smallModeNote'));
		$settingsH3.eq(4).text(t('gridTypeLabel'));
		
		// 更新格线样式选项
		const gridTypes = t('gridTypes');
		if (typeof gridTypes === 'object') {
			$('#gridTypeSelect option').each(function() {
				const val = $(this).val();
				if (gridTypes[val]) {
					$(this).text(gridTypes[val]);
				}
			});
		}
		
		$settingsH3.eq(5).text(t('showBaselineLabel'));
		$settingsNotes.eq(2).text(t('showBaselineNote'));
		$settingsH3.eq(6).text(t('noFixedWidthLabel'));
		$settingsNotes.eq(3).text(t('noFixedWidthNote'));
		$settingsH3.eq(7).text(t('pressureEffectLabel'));
		
		// 更新笔压选项
		const pressureEffects = t('pressureEffects');
		if (typeof pressureEffects === 'object') {
			$('#pressureEffectSelect option').each(function() {
				const val = $(this).val();
				if (pressureEffects[val]) {
					$(this).text(pressureEffects[val]);
				}
			});
		}
		
		$settingsNotes.eq(4).text(t('pressureEffectNote'));
		$settingsH3.eq(8).text(t('pressureDrawingLabel'));
		$settingsNotes.eq(5).text(t('pressureDrawingNote'));
		$settingsH3.eq(9).text(t('clearAllLabel'));
		$('#clearAllButton').text(t('clearAllButton'));
		$settingsH3.eq(10).text(t('exportEventsLabel'));
		$('#exportEventsButton').text(t('exportEventsButton'));

		// 更新匯入字表與預覽區塊
		$('#importFromTextTitle').text(t('importFromText'));
		$('#importTextarea').attr('placeholder', t('importTextPlaceholder'));
		$('#importTextButton').text(t('importTextButton'));
		$('#importTextNote').text(t('importTextNote'));
		$('#previewFontTitle').text(t('previewFont'));
		$('#openPreviewButton').text(t('openPreviewButton'));
		$('#preview-title').text(t('previewFont'));
		$('#previewTextLabel').text(t('previewTextLabel') + '：');
		$('#previewTextInput').attr('placeholder', t('previewTextPlaceholder'));
		$('#previewNote').text(t('previewNote'));
		$('#previewFontSizeLabel').text(t('previewFontSize') + '：');
		$('#previewLineHeightLabel').text(t('previewLineHeight') + '：');
		$('#previewButton').text(t('previewButton'));
		$('#previewClearButton').text(t('previewClear'));
		
		// 更新下载页面
		const $downloadH3 = $('#download-container h3');
		$downloadH3.eq(0).text(t('downloadFontButton').replace('下载字体OTF文件', '').replace('下載字型OTF檔案', '').replace('OTFファイルダウンロード', ''));
		if (!$downloadH3.eq(0).text()) {
			$downloadH3.eq(0).text(currentLang === 'zh-CN' ? '下载字体' : (currentLang === 'ja' ? 'フォントのダウンロード' : '下載字型'));
		}
		
		$('label[for="saveAsTester"]').text(t('saveAsTesterLabel'));
		$('#download-container .note').eq(0).text(t('saveAsTesterNote'));
		$('#downloadFontButton').text(t('downloadFontButton'));
		$downloadH3.eq(1).text(t('donateTitle'));
		$downloadH3.eq(1).next().html(t('donateText'));
		$downloadH3.eq(2).text(t('importDataLabel'));
		$downloadH3.eq(3).text(t('exportDataLabel'));
		$('#exportDataButton').text(t('exportDataButton'));
		
		// 更新提示内容
		const hintContent = t('hintContent');
		if (Array.isArray(hintContent)) {
			const $hintList = $('#hintContent');
			$hintList.empty();
			hintContent.forEach(function(text) {
				$hintList.append('<li>' + text + '</li>');
			});
			$hintList.append('<li><p class="dummy"></p></li>');
		}
	}
	
	// 绑定语言切换功能
	function bindLanguageSwitch() {
		// 语言按钮点击
		$('#langButton').on('click', function() {
			$('#lang-container').fadeIn(200);
		});
		
		// 关闭语言选择
		$('#closeLangButton').on('click', function() {
			$('#lang-container').fadeOut(200);
		});
		
		// 点击背景关闭
		$('#lang-container').on('click', function(e) {
			if (e.target.id === 'lang-container') {
				$(this).fadeOut(200);
			}
		});
		
		// 语言选项点击
		$('.lang-option').on('click', function() {
			const lang = $(this).data('lang');
			if (lang !== currentLang) {
				window.i18n.setLanguage(lang);
			}
		});
		
		// 高亮当前语言
		$('.lang-option[data-lang="' + currentLang + '"]').addClass('active');
	}
})();
