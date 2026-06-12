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
		$('.logo h1').text(t('appTitle'));
		$('.list-selector label').html('<i class="fas fa-list"></i> ' + t('listLabel'));
		
		// 更新对话框标题
		$('#listup-container h2').text(t('charSeqLabel'));
		$('#hint-container h2').html(t('hintTitle') + ' Ver <span id="version"></span>');
		$('#settings-title').first().text(t('settingsTitle'));
		$('#download-container h2').text(t('downloadTitle'));
		
		// 更新设置页面
		$('#span-welcome').html(t('spanWelcome'));
		
		// 使用更精确的ID选择器，避免索引错乱
		$('#fontNameEngLabel').text(t('fontNameEngLabel'));
		$('#fontNameEng').attr('placeholder', t('fontNameEngPlaceholder'));
		$('#fontNameCJKLabel').text(t('fontNameCJKLabel'));
		$('#fontNameCJK').attr('placeholder', t('fontNameCJKPlaceholder'));
		$('#scaleRateLabel').text(t('scaleRateLabel'));
		
		$('#scaleRateNote').text(t('scaleRateNote'));
		$('#canvasSizeLabel').text(t('canvasSizeLabel'));
		$('#canvasSizeNote').text(t('canvasSizeNote'));
		$('#gridTypeLabel').text(t('gridTypeLabel'));
		
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
		
		$('#showBaselineLabel').text(t('showBaselineLabel'));
		$('#showBaselineNote').text(t('showBaselineNote'));
		$('#noFixedWidthLabel').text(t('noFixedWidthLabel'));
		$('#noFixedWidthNote').text(t('noFixedWidthNote'));
		$('#pressureEffectLabel').text(t('pressureEffectLabel'));
		
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
		
		$('#pressureEffectNote').text(t('pressureEffectNote'));
		
		// 觸控筆傾斜角
		$('#penAngleModeLabel').text(t('penAngleModeLabel'));
		$('#penAngleModeNote').text(t('penAngleModeNote'));
		
		// 舊版筆壓模式
		$('#pressureDrawingLabel').text(t('pressureDrawingLabel'));
		$('#pressureDrawingNote').text(t('pressureDrawingNote'));
		
		// 完全清除字型資料與重置設定
		$('#clearAllLabel').text(t('clearAllLabel'));
		$('#clearAllButton').text(t('clearAllButton'));
		$('#resetSettingsLabel').text(t('resetSettingsLabel'));
		$('#resetSettingsButton').text(t('resetSettingsButton'));
		$('#exportEventsLabel').text(t('exportEventsLabel'));
		$('#exportEventsButton').text(t('exportEventsButton'));

		// 更新匯入字表與預覽區塊
		$('#importFromTextTitle').text(t('importFromText'));
		$('#importTextarea').attr('placeholder', t('importTextPlaceholder'));
		$('#importTextButton').text(t('importTextButton'));
		$('#importTextNote').text(t('importTextNote'));
		$('#previewFontTitle').text(t('previewFont'));
		$('#openPreviewButton').text(t('openPreviewButton'));
		$('#openPreviewButtonHeader').attr('title', t('previewFont'));
		$('#preview-title').text(t('previewFont'));
		$('#previewTextLabel').text(t('previewTextLabel') + '：');
		$('#previewTextInput').attr('placeholder', t('previewTextPlaceholder'));
		$('#previewNote').text(t('previewNote'));
		$('#previewFontSizeLabel').text(t('previewFontSize') + '：');
		$('#previewLineHeightLabel').text(t('previewLineHeight') + '：');
		$('#previewLetterSpacingLabel').text(t('previewLetterSpacing') + '：');
		$('#previewClearButton').text(t('previewClear'));
		
		// 更新下载按键多语言
		$('#downloadButton').html('<i class="fas fa-save"></i> ' + t('downloadButtonText'));
		
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
