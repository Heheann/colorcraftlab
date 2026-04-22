    // 內建 221 色拼豆色卡，依照使用者提供的兩張色卡圖片逐筆整理。
    const RAW_PALETTE_GROUPS = {
      A: [
        ["1", "faf5cd", [250, 245, 205]], ["2", "fcfed6", [252, 254, 214]], ["3", "fcff92", [252, 255, 146]],
        ["4", "f7ec5c", [247, 236, 92]], ["5", "f0d83a", [240, 216, 58]], ["6", "fda951", [253, 169, 81]],
        ["7", "fa8c4f", [250, 140, 79]], ["8", "fbda4d", [251, 218, 77]], ["9", "f79d5f", [247, 157, 95]],
        ["10", "f47e38", [244, 126, 56]], ["11", "fedb99", [254, 219, 153]], ["12", "fda276", [253, 162, 118]],
        ["13", "fec667", [254, 198, 103]], ["14", "f75842", [247, 88, 66]], ["15", "fbf65e", [251, 246, 94]],
        ["16", "feff97", [254, 255, 151]], ["17", "fde173", [253, 225, 115]], ["18", "fcbf80", [252, 191, 128]],
        ["19", "fd7e77", [253, 126, 119]], ["20", "f9d66e", [249, 214, 110]], ["21", "fae393", [250, 227, 147]],
        ["22", "edf878", [237, 248, 120]], ["23", "e4c8ba", [228, 200, 186]], ["24", "f3f6a9", [243, 246, 169]],
        ["25", "ffd785", [255, 215, 133]], ["26", "ffc734", [255, 199, 52]]
      ],
      B: [
        ["1", "dff13b", [223, 241, 59]], ["2", "64f343", [100, 243, 67]], ["3", "a1f586", [161, 245, 134]],
        ["4", "5fdf34", [95, 223, 52]], ["5", "39e158", [57, 225, 88]], ["6", "64e0a4", [100, 224, 164]],
        ["7", "3eae7c", [62, 174, 124]], ["8", "1d9b54", [29, 155, 84]], ["9", "2a5037", [42, 80, 55]],
        ["10", "9ad1ba", [154, 209, 186]], ["11", "627032", [98, 112, 50]], ["12", "1a6e3d", [26, 110, 61]],
        ["13", "c8e87d", [200, 232, 125]], ["14", "abe84f", [171, 232, 79]], ["15", "305335", [48, 83, 53]],
        ["16", "c0ed9c", [192, 237, 156]], ["17", "9eb33e", [158, 179, 62]], ["18", "e6ed4f", [230, 237, 79]],
        ["19", "26b78e", [38, 183, 142]], ["20", "cbeccf", [203, 236, 207]], ["21", "18616a", [24, 97, 106]],
        ["22", "0a4241", [10, 66, 65]], ["23", "343b1a", [52, 59, 26]], ["24", "e8faa6", [232, 250, 166]],
        ["25", "4e846d", [78, 132, 109]], ["26", "907c35", [144, 124, 53]], ["27", "d0e0af", [208, 224, 175]],
        ["28", "9ee5bb", [158, 229, 187]], ["29", "c6df5f", [198, 223, 95]], ["30", "e3fbb1", [227, 251, 177]],
        ["31", "b4e691", [180, 230, 145]], ["32", "92ad60", [146, 173, 96]]
      ],
      C: [
        ["1", "f0fee4", [240, 254, 228]], ["2", "abf0fe", [171, 240, 254]], ["3", "a2e0f7", [162, 224, 247]],
        ["4", "44cdfb", [68, 205, 251]], ["5", "06aadf", [6, 170, 223]], ["6", "54a7e9", [84, 167, 233]],
        ["7", "3977ca", [57, 119, 202]], ["8", "0f52bd", [15, 82, 189]], ["9", "3349c3", [51, 73, 195]],
        ["10", "3cbce3", [60, 188, 227]], ["11", "2aded3", [42, 222, 211]], ["12", "1e334e", [30, 51, 78]],
        ["13", "cde7fe", [205, 231, 254]], ["14", "d5fcf7", [213, 252, 247]], ["15", "21c5c4", [33, 197, 196]],
        ["16", "1858a2", [24, 88, 162]], ["17", "02d1f3", [2, 209, 243]], ["18", "213244", [33, 50, 68]],
        ["19", "18869d", [24, 134, 157]], ["20", "1a70a9", [26, 112, 169]], ["21", "bcddfc", [188, 221, 252]],
        ["22", "6bb1bb", [107, 177, 187]], ["23", "c8e2fd", [200, 226, 253]], ["24", "7ec5f9", [126, 197, 249]],
        ["25", "a9e8e0", [169, 232, 224]], ["26", "42adcf", [66, 173, 207]], ["27", "d0def9", [208, 222, 249]],
        ["28", "bdcee8", [189, 206, 232]], ["29", "364a89", [54, 74, 137]]
      ],
      D: [
        ["1", "acb7ef", [172, 183, 239]], ["2", "868dd3", [134, 141, 211]], ["3", "3554af", [53, 84, 175]],
        ["4", "162d7b", [22, 45, 123]], ["5", "b34ec6", [179, 78, 198]], ["6", "b37bdc", [179, 123, 220]],
        ["7", "8758a9", [135, 88, 169]], ["8", "e3d2fe", [227, 210, 254]], ["9", "d5b9f4", [213, 185, 244]],
        ["10", "301a49", [48, 26, 73]], ["11", "beb9e2", [190, 185, 226]], ["12", "dc99ce", [220, 153, 206]],
        ["13", "b5038d", [181, 3, 141]], ["14", "862993", [134, 41, 147]], ["15", "2f1f8c", [47, 31, 140]],
        ["16", "e2e4f0", [226, 228, 240]], ["17", "c7d3f9", [199, 211, 249]], ["18", "9a64b8", [154, 100, 184]],
        ["19", "d8c2d9", [216, 194, 217]], ["20", "9a35ad", [154, 53, 173]], ["21", "940595", [148, 5, 149]],
        ["22", "38389a", [56, 56, 154]], ["23", "eadbf8", [234, 219, 248]], ["24", "768ae1", [118, 138, 225]],
        ["25", "4950c2", [73, 80, 194]], ["26", "d6c6eb", [214, 198, 235]]
      ],
      E: [
        ["1", "f6d4cb", [246, 212, 203]], ["2", "fcc1dd", [252, 193, 221]], ["3", "f6bde8", [246, 189, 232]],
        ["4", "e8649e", [232, 100, 158]], ["5", "f0569f", [240, 86, 159]], ["6", "eb4172", [235, 65, 114]],
        ["7", "c53674", [197, 54, 116]], ["8", "fddbe9", [253, 219, 233]], ["9", "e376c7", [227, 118, 199]],
        ["10", "d13b95", [209, 59, 149]], ["11", "f7dad4", [247, 218, 212]], ["12", "f693bf", [246, 147, 191]],
        ["13", "b5026a", [181, 2, 106]], ["14", "fad4bf", [250, 212, 191]], ["15", "f5c9ca", [245, 201, 202]],
        ["16", "fbf4ec", [251, 244, 236]], ["17", "f7e3ec", [247, 227, 236]], ["18", "f9c8db", [249, 200, 219]],
        ["19", "f6bbd1", [246, 187, 209]], ["20", "d7c6ce", [215, 198, 206]], ["21", "c09da4", [192, 157, 164]],
        ["22", "b38c9f", [179, 140, 159]], ["23", "937d8a", [147, 125, 138]], ["24", "debee5", [222, 190, 229]]
      ],
      F: [
        ["1", "fe9381", [254, 147, 129]], ["2", "f63d4b", [246, 61, 75]], ["3", "ee4e3e", [238, 78, 62]],
        ["4", "fb2a40", [251, 42, 64]], ["5", "e10328", [225, 3, 40]], ["6", "913635", [145, 54, 53]],
        ["7", "911932", [145, 25, 50]], ["8", "bb0126", [187, 1, 38]], ["9", "e0677a", [224, 103, 122]],
        ["10", "874628", [135, 70, 40]], ["11", "592323", [89, 35, 35]], ["12", "f3536b", [243, 83, 107]],
        ["13", "f45c45", [244, 92, 69]], ["14", "fcadb2", [252, 173, 178]], ["15", "d50527", [213, 5, 39]],
        ["16", "f8c0a9", [248, 192, 169]], ["17", "e89b7d", [232, 155, 125]], ["18", "d07f4a", [208, 127, 74]],
        ["19", "be454a", [190, 69, 74]], ["20", "c69495", [198, 148, 149]], ["21", "f2b8c6", [242, 184, 198]],
        ["22", "f7c3d0", [247, 195, 208]], ["23", "ed806c", [237, 128, 108]], ["24", "e09daf", [224, 157, 175]],
        ["25", "e84854", [232, 72, 84]]
      ],
      G: [
        ["1", "ffe4d3", [255, 228, 211]], ["2", "fcc6ac", [252, 198, 172]], ["3", "f1c4a5", [241, 196, 165]],
        ["4", "dcb387", [220, 179, 135]], ["5", "e7b34e", [231, 179, 78]], ["6", "e3a014", [227, 160, 20]],
        ["7", "985c3a", [152, 92, 58]], ["8", "713d2f", [113, 61, 47]], ["9", "e4b685", [228, 182, 133]],
        ["10", "da8c42", [218, 140, 66]], ["11", "dac898", [218, 200, 152]], ["12", "fec993", [254, 201, 147]],
        ["13", "b2714b", [178, 113, 75]], ["14", "8b684c", [139, 104, 76]], ["15", "f6f8e3", [246, 248, 227]],
        ["16", "f2d8c1", [242, 216, 193]], ["17", "77544e", [119, 84, 78]], ["18", "ffe3d5", [255, 227, 213]],
        ["19", "dd7d41", [221, 125, 65]], ["20", "a5452f", [165, 69, 47]], ["21", "b38561", [179, 133, 97]]
      ],
      H: [
        ["1", "ffffff", [255, 255, 255]], ["2", "fbfbfb", [251, 251, 251]], ["3", "b4b4b4", [180, 180, 180]],
        ["4", "878787", [135, 135, 135]], ["5", "464648", [70, 70, 72]], ["6", "2c2c2c", [44, 44, 44]],
        ["7", "010101", [1, 1, 1]], ["8", "e7d6dc", [231, 214, 220]], ["9", "efedee", [239, 237, 238]],
        ["10", "ebebeb", [235, 235, 235]], ["11", "cdcdcd", [205, 205, 205]], ["12", "fdf6ee", [253, 246, 238]],
        ["13", "f4efd1", [244, 239, 209]], ["14", "ced7d4", [206, 215, 212]], ["15", "9aa6a6", [154, 166, 166]],
        ["16", "1b1213", [27, 18, 19]], ["17", "f0eeef", [240, 238, 239]], ["18", "fcfff6", [252, 255, 246]],
        ["19", "f2eee5", [242, 238, 229]], ["20", "96a09f", [150, 160, 159]], ["21", "f8fbe6", [248, 251, 230]],
        ["22", "cacad2", [202, 202, 210]], ["23", "9b9c94", [155, 156, 148]]
      ],
      M: [
        ["1", "bbc6b6", [187, 198, 182]], ["2", "909994", [144, 153, 148]], ["3", "697e81", [105, 126, 129]],
        ["4", "e0d4bc", [224, 212, 188]], ["5", "d1ccaf", [209, 204, 175]], ["6", "b0aa86", [176, 170, 134]],
        ["7", "b0a796", [176, 167, 150]], ["8", "ae8082", [174, 128, 130]], ["9", "a68862", [166, 136, 98]],
        ["10", "c4b3bb", [196, 179, 187]], ["11", "9d7693", [157, 118, 147]], ["12", "644b51", [100, 75, 81]],
        ["13", "c79266", [199, 146, 102]], ["14", "c27563", [194, 117, 99]], ["15", "747d7a", [116, 125, 122]]
      ]
    };

    const BUILTIN_PALETTE = Object.entries(RAW_PALETTE_GROUPS)
      .flatMap(([group, entries]) =>
        entries.map(([num, hex, rgb]) => ({
          id: `${group}${num}`,
          name: `${group}${num}`,
          hex: `#${hex.toLowerCase()}`,
          rgb: [...rgb]
        }))
      )
      .sort((a, b) => {
        const [groupA, numA] = [a.id[0], parseInt(a.id.slice(1), 10)];
        const [groupB, numB] = [b.id[0], parseInt(b.id.slice(1), 10)];
        return groupA.localeCompare(groupB) || numA - numB;
      });

    const paletteById = Object.fromEntries(BUILTIN_PALETTE.map((item) => [item.id, item]));
    const STORAGE_KEY = "perler-hex-tool:v2";
    const LEGACY_STORAGE_KEY = "perler-hex-tool:v1";
    const IMAGE_DB_NAME = "perler-hex-tool-images";
    const IMAGE_DB_VERSION = 2;
    const IMAGE_STORE_NAME = "uploads";
    const HISTORY_STORE_NAME = "history-records";
    const HISTORY_BLOB_STORE_NAME = "history-blobs";
    const LAST_IMAGE_STORE_KEY = "last-upload";
    const MAX_RECENT = 10;
    const MAX_HISTORY = 36;
    const DEFAULT_SETTINGS = {
      colorLimitMode: "16",
      customColorLimit: 16,
      ignoreTransparent: true,
      mergeSimilar: true,
      mode: "match",
      distanceMethod: "deltaE",
      zoom: 1
    };
    const DEFAULT_THEME = "light";
    const DEFAULT_EXPORT_PREFS = {
      historyFormat: "json",
      includeSettings: true
    };

    const state = {
      settings: { ...DEFAULT_SETTINGS },
      activeView: "overview",
      theme: DEFAULT_THEME,
      favorites: [],
      historyItems: [],
      historyFilters: {
        query: "",
        mode: "all"
      },
      exportPrefs: { ...DEFAULT_EXPORT_PREFS },
      paletteFilters: {
        group: "all",
        tone: "all",
        favoritesOnly: false
      },
      infoModal: "",
      mobileNavOpen: false,
      activeTab: "analyze",
      paletteSearch: "",
      recentViews: [],
      imageDataUrl: "",
      imageStoreKey: "",
      imageName: "",
      sourceImage: null,
      sourceCanvas: document.createElement("canvas"),
      analysis: null,
      chartRecognition: null,
      hoverPixel: null,
      clickedPixel: null,
      hoverCellKey: null,
      manualOverrides: {},
      chartManualOverrides: {},
      detail: null,
      activeResultKey: null,
      simulatorFocus: null,
      previewInteractionMode: "pixel",
      isAnalyzing: false,
      ocrStatusText: "",
      tesseractScriptPromise: null,
      tesseractWorker: null,
      imageDbPromise: null,
      analysisRunId: 0,
      analysisDurationMs: 0
    };

    const els = {
      heroPaletteCount: document.getElementById("heroPaletteCount"),
      appShell: document.getElementById("appShell"),
      appSidebar: document.getElementById("appSidebar"),
      sidebarBackdrop: document.getElementById("sidebarBackdrop"),
      mobileNavToggle: document.getElementById("mobileNavToggle"),
      topbarTitle: document.getElementById("topbarTitle"),
      topbarSubtitle: document.getElementById("topbarSubtitle"),
      quickThemeButton: document.getElementById("themeQuickToggle"),
      viewButtons: Array.from(document.querySelectorAll("[data-action='switch-view']")),
      viewPanels: Array.from(document.querySelectorAll("[data-view-panel]")),
      overviewMetrics: document.getElementById("overviewMetrics"),
      overviewExportMeta: document.getElementById("overviewExportMeta"),
      analysisMetrics: document.getElementById("analysisMetrics"),
      analysisDonut: document.getElementById("analysisDonut"),
      analysisLegend: document.getElementById("analysisLegend"),
      analysisRanking: document.getElementById("analysisRanking"),
      analysisHeatmapCanvas: document.getElementById("analysisHeatmapCanvas"),
      analysisHeatmapLegend: document.getElementById("analysisHeatmapLegend"),
      analysisResultsSummary: document.getElementById("analysisResultsSummary"),
      favoritePaletteStrip: document.getElementById("favoritePaletteStrip"),
      paletteFavoritesCount: document.getElementById("paletteFavoritesCount"),
      paletteGroupFilter: document.getElementById("paletteGroupFilter"),
      paletteToneFilter: document.getElementById("paletteToneFilter"),
      paletteFavoritesOnlyCheckbox: document.getElementById("paletteFavoritesOnlyCheckbox"),
      historySearchInput: document.getElementById("historySearchInput"),
      historyFilterSelect: document.getElementById("historyFilterSelect"),
      historyCount: document.getElementById("historyCount"),
      historyList: document.getElementById("historyList"),
      historySummary: document.getElementById("historySummary"),
      settingsThemeSelect: document.getElementById("settingsThemeSelect"),
      settingsColorLimitSelect: document.getElementById("settingsColorLimitSelect"),
      settingsCustomColorLimitInput: document.getElementById("settingsCustomColorLimitInput"),
      settingsDistanceMethodSelect: document.getElementById("settingsDistanceMethodSelect"),
      settingsIgnoreTransparentCheckbox: document.getElementById("settingsIgnoreTransparentCheckbox"),
      settingsMergeSimilarCheckbox: document.getElementById("settingsMergeSimilarCheckbox"),
      settingsModeSelect: document.getElementById("settingsModeSelect"),
      settingsHistoryFormatSelect: document.getElementById("settingsHistoryFormatSelect"),
      settingsIncludeSettingsCheckbox: document.getElementById("settingsIncludeSettingsCheckbox"),
      clearHistoryButton: document.getElementById("clearHistoryButton"),
      infoModalOverlay: document.getElementById("infoModalOverlay"),
      infoModalTitle: document.getElementById("infoModalTitle"),
      infoModalBody: document.getElementById("infoModalBody"),
      closeInfoModalButton: document.getElementById("closeInfoModalButton"),
      paletteStatusPill: document.getElementById("paletteStatusPill"),
      paletteCountPill: document.getElementById("paletteCountPill"),
      tabButtons: Array.from(document.querySelectorAll("[data-action='switch-tab']")),
      analyzeTabPanel: document.getElementById("analyzeTabPanel"),
      paletteTabPanel: document.getElementById("paletteTabPanel"),
      imageInput: document.getElementById("imageInput"),
      analyzeButton: document.getElementById("analyzeButton"),
      resetButton: document.getElementById("resetButton"),
      imageStatusText: document.getElementById("imageStatusText"),
      colorLimitSelect: document.getElementById("colorLimitSelect"),
      customColorLimitInput: document.getElementById("customColorLimitInput"),
      distanceMethodSelect: document.getElementById("distanceMethodSelect"),
      ignoreTransparentCheckbox: document.getElementById("ignoreTransparentCheckbox"),
      mergeSimilarCheckbox: document.getElementById("mergeSimilarCheckbox"),
      zoomRange: document.getElementById("zoomRange"),
      zoomLabel: document.getElementById("zoomLabel"),
      sampleInfoText: document.getElementById("sampleInfoText"),
      previewStage: document.getElementById("previewStage"),
      previewCanvas: document.getElementById("previewCanvas"),
      previewCtx: document.getElementById("previewCanvas").getContext("2d"),
      highlightCanvas: document.getElementById("highlightCanvas"),
      highlightCtx: document.getElementById("highlightCanvas").getContext("2d"),
      emptyPreviewMessage: document.getElementById("emptyPreviewMessage"),
      pixelModeButton: document.getElementById("pixelModeButton"),
      cellModeButton: document.getElementById("cellModeButton"),
      previewModeText: document.getElementById("previewModeText"),
      hoverInspector: document.getElementById("hoverInspector"),
      clickInspector: document.getElementById("clickInspector"),
      analysisSummaryPill: document.getElementById("analysisSummaryPill"),
      top10Colors: document.getElementById("top10Colors"),
      recognitionSummaryPill: document.getElementById("recognitionSummaryPill"),
      recognitionStatusBox: document.getElementById("recognitionStatusBox"),
      recognizedIdList: document.getElementById("recognizedIdList"),
      ocrPreviewList: document.getElementById("ocrPreviewList"),
      resultsList: document.getElementById("resultsList"),
      exportJsonButton: document.getElementById("exportJsonButton"),
      exportCsvButton: document.getElementById("exportCsvButton"),
      exportSwatchesButton: document.getElementById("exportSwatchesButton"),
      paletteSearchInput: document.getElementById("paletteSearchInput"),
      paletteSearchSummary: document.getElementById("paletteSearchSummary"),
      paletteBrowser: document.getElementById("paletteBrowser"),
      recentColors: document.getElementById("recentColors"),
      detailOverlay: document.getElementById("detailOverlay"),
      detailDrawer: document.getElementById("detailDrawer"),
      drawerTitle: document.getElementById("drawerTitle"),
      drawerSubtitle: document.getElementById("drawerSubtitle"),
      drawerContent: document.getElementById("drawerContent"),
      closeDrawerButton: document.getElementById("closeDrawerButton"),
      toastWrap: document.getElementById("toastWrap"),
      analysisModeRadios: Array.from(document.querySelectorAll('input[name="matchMode"]')),
      tomodachiPaletteCanvas: document.getElementById("tomodachiPaletteCanvas"),
      tomodachiHueCanvas: document.getElementById("tomodachiHueCanvas"),
      tomodachiLegend: document.getElementById("tomodachiLegend"),
      tomodachiGuideTitle: document.getElementById("tomodachiGuideTitle"),
      tomodachiGuideText: document.getElementById("tomodachiGuideText"),
      paletteTomodachiPaletteCanvas: document.getElementById("paletteTomodachiPaletteCanvas"),
      paletteTomodachiHueCanvas: document.getElementById("paletteTomodachiHueCanvas"),
      paletteTomodachiLegend: document.getElementById("paletteTomodachiLegend"),
      paletteTomodachiGuideTitle: document.getElementById("paletteTomodachiGuideTitle"),
      paletteTomodachiGuideText: document.getElementById("paletteTomodachiGuideText"),
      paletteIdOptions: document.getElementById("paletteIdOptions"),
      heroBandA: document.getElementById("heroBandA"),
      heroBandB: document.getElementById("heroBandB")
    };

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function round(value, digits = 1) {
      const factor = 10 ** digits;
      return Math.round(value * factor) / factor;
    }

    function hexToRgb(hex) {
      const normalized = String(hex).trim().replace(/^#/, "");
      const expanded = normalized.length === 3
        ? normalized.split("").map((char) => char + char).join("")
        : normalized;
      const safeHex = expanded.padEnd(6, "0").slice(0, 6);
      return {
        r: parseInt(safeHex.slice(0, 2), 16),
        g: parseInt(safeHex.slice(2, 4), 16),
        b: parseInt(safeHex.slice(4, 6), 16)
      };
    }

    function normalizeColorInput(color) {
      if (!color) {
        return { r: 0, g: 0, b: 0 };
      }
      if (typeof color === "string") {
        return hexToRgb(color);
      }
      if (Array.isArray(color)) {
        return {
          r: clamp(Math.round(color[0] ?? 0), 0, 255),
          g: clamp(Math.round(color[1] ?? 0), 0, 255),
          b: clamp(Math.round(color[2] ?? 0), 0, 255)
        };
      }
      if (Array.isArray(color.rgb)) {
        return normalizeColorInput(color.rgb);
      }
      return {
        r: clamp(Math.round(color.r ?? 0), 0, 255),
        g: clamp(Math.round(color.g ?? 0), 0, 255),
        b: clamp(Math.round(color.b ?? 0), 0, 255)
      };
    }

    function rgbToHex(r, g, b) {
      const { r: rr, g: gg, b: bb } = normalizeColorInput(
        typeof r === "object" ? r : [r, g, b]
      );
      return `#${[rr, gg, bb].map((value) => value.toString(16).padStart(2, "0")).join("")}`;
    }

    function rgbToHsl(r, g, b) {
      const { r: rr, g: gg, b: bb } = normalizeColorInput(typeof r === "object" ? r : [r, g, b]);
      const rn = rr / 255;
      const gn = gg / 255;
      const bn = bb / 255;
      const max = Math.max(rn, gn, bn);
      const min = Math.min(rn, gn, bn);
      const delta = max - min;
      let h = 0;
      const l = (max + min) / 2;
      const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

      if (delta !== 0) {
        if (max === rn) {
          h = ((gn - bn) / delta) % 6;
        } else if (max === gn) {
          h = (bn - rn) / delta + 2;
        } else {
          h = (rn - gn) / delta + 4;
        }
        h = Math.round(h * 60);
        if (h < 0) h += 360;
      }

      return {
        h,
        s: round(s * 100, 1),
        l: round(l * 100, 1)
      };
    }

    function rgbToHsv(r, g, b) {
      const { r: rr, g: gg, b: bb } = normalizeColorInput(typeof r === "object" ? r : [r, g, b]);
      const rn = rr / 255;
      const gn = gg / 255;
      const bn = bb / 255;
      const max = Math.max(rn, gn, bn);
      const min = Math.min(rn, gn, bn);
      const delta = max - min;
      let h = 0;
      const s = max === 0 ? 0 : delta / max;
      const v = max;

      if (delta !== 0) {
        if (max === rn) {
          h = ((gn - bn) / delta) % 6;
        } else if (max === gn) {
          h = (bn - rn) / delta + 2;
        } else {
          h = (rn - gn) / delta + 4;
        }
        h = Math.round(h * 60);
        if (h < 0) h += 360;
      }

      return {
        h,
        s: round(s * 100, 1),
        v: round(v * 100, 1)
      };
    }

    function hsvToRgb(h, s, v) {
      const hue = ((h % 360) + 360) % 360;
      const sat = clamp(s, 0, 1);
      const val = clamp(v, 0, 1);
      const c = val * sat;
      const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
      const m = val - c;
      let r1 = 0;
      let g1 = 0;
      let b1 = 0;

      if (hue < 60) [r1, g1, b1] = [c, x, 0];
      else if (hue < 120) [r1, g1, b1] = [x, c, 0];
      else if (hue < 180) [r1, g1, b1] = [0, c, x];
      else if (hue < 240) [r1, g1, b1] = [0, x, c];
      else if (hue < 300) [r1, g1, b1] = [x, 0, c];
      else [r1, g1, b1] = [c, 0, x];

      return {
        r: Math.round((r1 + m) * 255),
        g: Math.round((g1 + m) * 255),
        b: Math.round((b1 + m) * 255)
      };
    }

    function rgbToXyz(r, g, b) {
      const { r: rr, g: gg, b: bb } = normalizeColorInput(typeof r === "object" ? r : [r, g, b]);
      const transform = (channel) => {
        const normalized = channel / 255;
        return normalized > 0.04045
          ? ((normalized + 0.055) / 1.055) ** 2.4
          : normalized / 12.92;
      };

      const rn = transform(rr);
      const gn = transform(gg);
      const bn = transform(bb);

      return {
        x: (rn * 0.4124 + gn * 0.3576 + bn * 0.1805) * 100,
        y: (rn * 0.2126 + gn * 0.7152 + bn * 0.0722) * 100,
        z: (rn * 0.0193 + gn * 0.1192 + bn * 0.9505) * 100
      };
    }

    function xyzToLab(x, y, z) {
      const refX = 95.047;
      const refY = 100.0;
      const refZ = 108.883;

      const pivot = (value) =>
        value > 0.008856 ? value ** (1 / 3) : (7.787 * value) + (16 / 116);

      const fx = pivot(x / refX);
      const fy = pivot(y / refY);
      const fz = pivot(z / refZ);

      return {
        l: (116 * fy) - 16,
        a: 500 * (fx - fy),
        b: 200 * (fy - fz)
      };
    }

    function rgbToLab(r, g, b) {
      const { x, y, z } = rgbToXyz(r, g, b);
      return xyzToLab(x, y, z);
    }

    function deltaE76(labA, labB) {
      return Math.sqrt(
        (labA.l - labB.l) ** 2 +
        (labA.a - labB.a) ** 2 +
        (labA.b - labB.b) ** 2
      );
    }

    function rgbDistance(colorA, colorB) {
      const a = normalizeColorInput(colorA);
      const b = normalizeColorInput(colorB);
      return Math.sqrt(
        (a.r - b.r) ** 2 +
        (a.g - b.g) ** 2 +
        (a.b - b.b) ** 2
      );
    }

    function colorDistance(colorA, colorB, method = state.settings.distanceMethod) {
      if (method === "rgb") {
        return rgbDistance(colorA, colorB);
      }
      const a = normalizeColorInput(colorA);
      const b = normalizeColorInput(colorB);
      return deltaE76(rgbToLab(a), rgbToLab(b));
    }

    function findNearestPaletteColor(color, method = state.settings.distanceMethod) {
      const normalized = normalizeColorInput(color);
      let best = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const entry of BUILTIN_PALETTE) {
        const distance = colorDistance(normalized, entry.rgb, method);
        if (distance < bestDistance) {
          best = entry;
          bestDistance = distance;
        }
      }

      return best ? { ...best, distance: round(bestDistance, 2) } : null;
    }

    function findTopNearestPaletteColors(color, limit = 3, method = state.settings.distanceMethod) {
      const normalized = normalizeColorInput(color);
      return BUILTIN_PALETTE
        .map((entry) => ({
          ...entry,
          distance: round(colorDistance(normalized, entry.rgb, method), 2)
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, limit);
    }

    function getHueLabel(hue, saturation = 100, lightness = 50) {
      if (saturation < 12) {
        if (lightness > 86) return "米白";
        if (lightness < 18) return "近黑灰";
        return "灰色";
      }

      if (hue < 18 || hue >= 345) return "紅色";
      if (hue < 42) return "橘紅";
      if (hue < 58) return "橘色";
      if (hue < 75) return "黃色";
      if (hue < 105) return "黃綠";
      if (hue < 150) return "綠色";
      if (hue < 185) return "青綠";
      if (hue < 220) return "青藍";
      if (hue < 255) return "藍色";
      if (hue < 290) return "紫色";
      if (hue < 320) return "粉紫";
      return "粉紅";
    }

    function describeHexPosition(color) {
      const rgb = normalizeColorInput(color);
      const hsv = rgbToHsv(rgb);
      const hsl = rgbToHsl(rgb);
      const hueLabel = getHueLabel(hsv.h, hsv.s, hsl.l);

      const xPhrase = hsv.s < 14 ? "偏左" : hsv.s < 38 ? "中間偏左" : hsv.s < 68 ? "中間偏右" : "偏右";
      const yPhrase = hsv.v > 82 ? "偏上" : hsv.v > 58 ? "中間" : hsv.v > 30 ? "偏下" : "接近下方";
      const saturationPhrase = hsv.s < 12 ? "低飽和、偏灰" : hsv.s < 38 ? "柔和、帶一點灰感" : hsv.s < 72 ? "顏色感明顯" : "高飽和、很有色感";
      const brightnessPhrase = hsv.v > 84 ? "整體偏亮" : hsv.v > 60 ? "亮度中上" : hsv.v > 34 ? "亮度中低" : "整體偏暗";

      let toneHint = `${xPhrase}${yPhrase}的${hueLabel}區`;

      if (hsv.s < 10 && hsv.v > 88) {
        toneHint = "接近左上角的低飽和米白色區";
      } else if (hsv.s < 12 && hsv.v < 20) {
        toneHint = "接近左下角的深灰近黑區";
      } else if (hsv.s < 18 && hsv.v > 50 && hsv.v < 82) {
        toneHint = `中間偏左的灰調${hueLabel}區`;
      }

      return `這色大約在${toneHint}，屬於${brightnessPhrase}、${saturationPhrase}的${hueLabel}。`;
    }

    function getTomodachiSliderHuePercent(hue) {
      return ((360 - hue) % 360) / 360;
    }

    function getHueBandLabelBySliderPercent(percent) {
      if (percent < 0.06 || percent >= 0.95) return "紅區";
      if (percent < 0.15) return "粉紅區";
      if (percent < 0.28) return "粉紫區";
      if (percent < 0.45) return "藍區";
      if (percent < 0.57) return "青區";
      if (percent < 0.73) return "綠區";
      if (percent < 0.89) return "黃區";
      return "橘紅區";
    }

    function mapColorToTomodachiPalette(color) {
      const rgb = normalizeColorInput(color);
      const hsv = rgbToHsv(rgb);
      const hsl = rgbToHsl(rgb);
      const hueSliderX = round(getTomodachiSliderHuePercent(hsv.h) * 100, 1);
      const paletteX = round(clamp((hsv.s * 0.78) + (hsl.s * 0.22), 0, 100), 1);
      const paletteY = round(clamp(100 - ((hsv.v * 0.68) + (hsl.l * 0.32)), 0, 100), 1);
      const hueBandLabel = getHueBandLabelBySliderPercent(hueSliderX / 100);

      const horizontal = paletteX < 22 ? "偏左" : paletteX < 42 ? "中間偏左" : paletteX < 62 ? "中間" : paletteX < 80 ? "中間偏右" : "偏右";
      const vertical = paletteY < 18 ? "偏上" : paletteY < 38 ? "上方偏中" : paletteY < 62 ? "中間" : paletteY < 82 ? "下方偏中" : "偏下";
      const guidance = `先將底部滑桿調到 ${Math.round(hueSliderX)}% 左右的${hueBandLabel}，再到上方色盤 ${Math.round(paletteX)}%, ${Math.round(paletteY)}% 的位置找色，大約是${horizontal}、${vertical}。`;

      return {
        hueSliderX,
        paletteX,
        paletteY,
        hueBandLabel,
        guidance
      };
    }

    function describeTomodachiPalettePosition(color) {
      const mapped = mapColorToTomodachiPalette(color);
      const saturationComment = mapped.paletteX < 18 ? "這色偏灰、偏淡" :
        mapped.paletteX < 45 ? "這色帶一點色相但不會太刺眼" :
        mapped.paletteX < 72 ? "這色的主色相感已經很明顯" :
        "這色屬於很有色感的濃色區";

      const brightnessComment = mapped.paletteY < 18 ? "位置偏上，所以會比較亮" :
        mapped.paletteY < 48 ? "位置偏中上，亮度還算充足" :
        mapped.paletteY < 78 ? "位置偏中下，已經開始變暗" :
        "位置偏下，所以是比較深、比較暗的版本";

      return `${mapped.guidance} ${saturationComment}，${brightnessComment}。`;
    }

    function weightedAverageRgb(items) {
      let sumR = 0;
      let sumG = 0;
      let sumB = 0;
      let total = 0;
      items.forEach((item) => {
        const rgb = normalizeColorInput(item.rgb ?? item.rawRgb ?? item);
        const weight = item.count ?? item.weight ?? 1;
        sumR += rgb.r * weight;
        sumG += rgb.g * weight;
        sumB += rgb.b * weight;
        total += weight;
      });
      if (total === 0) return { r: 0, g: 0, b: 0 };
      return {
        r: Math.round(sumR / total),
        g: Math.round(sumG / total),
        b: Math.round(sumB / total)
      };
    }

    function openImageDatabase() {
      if (!window.indexedDB) {
        return Promise.resolve(null);
      }
      if (state.imageDbPromise) {
        return state.imageDbPromise;
      }

      state.imageDbPromise = new Promise((resolve, reject) => {
        const request = window.indexedDB.open(IMAGE_DB_NAME, IMAGE_DB_VERSION);
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains(IMAGE_STORE_NAME)) {
            db.createObjectStore(IMAGE_STORE_NAME);
          }
          if (!db.objectStoreNames.contains(HISTORY_STORE_NAME)) {
            db.createObjectStore(HISTORY_STORE_NAME, { keyPath: "id" });
          }
          if (!db.objectStoreNames.contains(HISTORY_BLOB_STORE_NAME)) {
            db.createObjectStore(HISTORY_BLOB_STORE_NAME);
          }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error("IndexedDB open failed"));
      }).catch((error) => {
        console.warn("IndexedDB unavailable:", error);
        state.imageDbPromise = null;
        return null;
      });

      return state.imageDbPromise;
    }

    async function saveImageBlobToStore(blob, key = LAST_IMAGE_STORE_KEY) {
      const db = await openImageDatabase();
      if (!db) return false;

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(IMAGE_STORE_NAME, "readwrite");
        const store = transaction.objectStore(IMAGE_STORE_NAME);
        store.put(blob, key);
        transaction.oncomplete = () => resolve(true);
        transaction.onerror = () => reject(transaction.error || new Error("IndexedDB write failed"));
        transaction.onabort = () => reject(transaction.error || new Error("IndexedDB write aborted"));
      }).catch((error) => {
        console.warn("Failed to save image blob:", error);
        return false;
      });
    }

    async function loadImageBlobFromStore(key = LAST_IMAGE_STORE_KEY) {
      const db = await openImageDatabase();
      if (!db) return null;

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(IMAGE_STORE_NAME, "readonly");
        const store = transaction.objectStore(IMAGE_STORE_NAME);
        const request = store.get(key);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error || new Error("IndexedDB read failed"));
      }).catch((error) => {
        console.warn("Failed to load image blob:", error);
        return null;
      });
    }

    async function deleteImageBlobFromStore(key = LAST_IMAGE_STORE_KEY) {
      const db = await openImageDatabase();
      if (!db) return false;

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(IMAGE_STORE_NAME, "readwrite");
        const store = transaction.objectStore(IMAGE_STORE_NAME);
        store.delete(key);
        transaction.oncomplete = () => resolve(true);
        transaction.onerror = () => reject(transaction.error || new Error("IndexedDB delete failed"));
        transaction.onabort = () => reject(transaction.error || new Error("IndexedDB delete aborted"));
      }).catch((error) => {
        console.warn("Failed to delete image blob:", error);
        return false;
      });
    }

    function getCanvasDeviceScale() {
      return clamp(window.devicePixelRatio || 1, 1, 3);
    }

    function configureDisplayCanvas(canvas, cssWidth, cssHeight) {
      const dpr = getCanvasDeviceScale();
      canvas.width = Math.max(1, Math.round(cssWidth * dpr));
      canvas.height = Math.max(1, Math.round(cssHeight * dpr));
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      return dpr;
    }

    function sortPaletteIds(a, b) {
      const groupA = String(a || "")[0] || "";
      const groupB = String(b || "")[0] || "";
      const numA = parseInt(String(a || "").slice(1), 10) || 0;
      const numB = parseInt(String(b || "").slice(1), 10) || 0;
      return groupA.localeCompare(groupB) || numA - numB;
    }

    function getCellKey(row, col) {
      return `cell-r${row}-c${col}`;
    }

    function median(values) {
      if (!values.length) return 0;
      const sorted = [...values].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
    }

    function normalizeOcrWordText(text) {
      return String(text || "")
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
    }

    function normalizeOcrColorId(text) {
      const cleaned = normalizeOcrWordText(text);
      if (!cleaned) return "";

      const letter = cleaned[0] || "";
      const digitPart = cleaned
        .slice(1)
        .replace(/[OQD]/g, "0")
        .replace(/[IL|]/g, "1")
        .replace(/Z/g, "2")
        .replace(/S/g, "5")
        .replace(/B/g, "8");
      const normalized = `${letter}${digitPart}`;
      const candidates = normalized.match(/[A-Z][0-9]{1,2}/g) || [];

      for (const candidate of candidates) {
        if (paletteById[candidate]) {
          return candidate;
        }
      }

      return paletteById[normalized] ? normalized : "";
    }

    function getWordBounds(word, scale = 1) {
      const bbox = word?.bbox || word || {};
      const x0 = (bbox.x0 ?? bbox.left ?? 0) / scale;
      const y0 = (bbox.y0 ?? bbox.top ?? 0) / scale;
      const x1 = (bbox.x1 ?? bbox.right ?? x0) / scale;
      const y1 = (bbox.y1 ?? bbox.bottom ?? y0) / scale;
      return {
        x0,
        y0,
        x1,
        y1,
        width: Math.max(0, x1 - x0),
        height: Math.max(0, y1 - y0),
        centerX: x0 + ((x1 - x0) / 2),
        centerY: y0 + ((y1 - y0) / 2)
      };
    }

    function preprocessBoardForOcr(sourceCanvas) {
      const scale = clamp(Math.min(2.2, 2200 / Math.max(sourceCanvas.width, sourceCanvas.height)), 1.4, 2.2);
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(sourceCanvas.width * scale));
      canvas.height = Math.max(1, Math.round(sourceCanvas.height * scale));
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(sourceCanvas, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = imageData;
      for (let index = 0; index < data.length; index += 4) {
        const alpha = data[index + 3];
        if (alpha < 16) {
          data[index] = 255;
          data[index + 1] = 255;
          data[index + 2] = 255;
          data[index + 3] = 255;
          continue;
        }
        const luminance = (data[index] * 0.299) + (data[index + 1] * 0.587) + (data[index + 2] * 0.114);
        const contrasted = clamp(Math.round(((luminance - 128) * 1.55) + 128), 0, 255);
        data[index] = contrasted;
        data[index + 1] = contrasted;
        data[index + 2] = contrasted;
        data[index + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
      return { canvas, scale };
    }

    async function loadTesseract() {
      if (window.Tesseract?.createWorker) {
        return window.Tesseract;
      }
      if (state.tesseractScriptPromise) {
        return state.tesseractScriptPromise;
      }

      state.tesseractScriptPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.onload = () => {
          if (window.Tesseract?.createWorker) {
            resolve(window.Tesseract);
          } else {
            reject(new Error("Tesseract.js 載入後仍找不到 createWorker"));
          }
        };
        script.onerror = () => reject(new Error("Tesseract.js 載入失敗"));
        document.head.appendChild(script);
      });

      return state.tesseractScriptPromise;
    }

    async function getTesseractWorker() {
      if (state.tesseractWorker) {
        return state.tesseractWorker;
      }

      const Tesseract = await loadTesseract();
      state.ocrStatusText = "正在建立 OCR worker...";
      renderRecognitionResults();
      const worker = await Tesseract.createWorker("eng", 1, {
        logger: (message) => {
          if (!message?.status) return;
          const progressText = typeof message.progress === "number"
            ? ` ${Math.round(message.progress * 100)}%`
            : "";
          state.ocrStatusText = `OCR ${message.status}${progressText}`;
          renderRecognitionResults();
        }
      });

      await worker.setParameters({
        tessedit_char_whitelist: "ABCDEFGHM0123456789",
        preserve_interword_spaces: "1",
        tessedit_pageseg_mode: "11",
        user_defined_dpi: "150"
      });
      state.tesseractWorker = worker;
      return worker;
    }

    async function runBoardOcr(canvas) {
      const worker = await getTesseractWorker();
      const result = await worker.recognize(canvas);
      return result?.data?.words || [];
    }

    function extractOcrPreviewWords(words, scale = 1) {
      return (words || [])
        .map((word, index) => {
          const rawText = String(word?.text || "").trim();
          if (!rawText) return null;
          const bounds = getWordBounds(word, scale);
          const normalizedText = normalizeOcrWordText(rawText);
          const normalizedId = normalizeOcrColorId(rawText);
          return {
            key: `ocr-word-${index + 1}`,
            rawText,
            normalizedText,
            normalizedId,
            confidence: round(word?.confidence ?? word?.conf ?? 0, 1),
            bounds
          };
        })
        .filter(Boolean);
    }

    function clusterItemsByCoordinate(items, accessor, tolerance) {
      const sorted = [...items].sort((a, b) => accessor(a) - accessor(b));
      const clusters = [];
      sorted.forEach((item) => {
        const value = accessor(item);
        const lastCluster = clusters[clusters.length - 1];
        if (!lastCluster || Math.abs(lastCluster.anchor - value) > tolerance) {
          clusters.push({ items: [item], anchor: value });
          return;
        }
        lastCluster.items.push(item);
        lastCluster.anchor = lastCluster.items.reduce((sum, entry) => sum + accessor(entry), 0) / lastCluster.items.length;
      });
      return clusters;
    }

    function fitIndexedLine(points) {
      if (points.length < 2) return null;
      const meanIndex = points.reduce((sum, point) => sum + point.index, 0) / points.length;
      const meanCoord = points.reduce((sum, point) => sum + point.coord, 0) / points.length;
      let numerator = 0;
      let denominator = 0;
      points.forEach((point) => {
        numerator += (point.index - meanIndex) * (point.coord - meanCoord);
        denominator += (point.index - meanIndex) ** 2;
      });
      if (denominator === 0) return null;
      const step = numerator / denominator;
      const intercept = meanCoord - (step * meanIndex);
      return { intercept, step };
    }

    function selectCoordinateCluster(words, orientation, imageWidth, imageHeight) {
      const digitWords = words.filter((word) =>
        /^\d{1,2}$/.test(word.normalizedText) &&
        word.confidence >= 18
      );
      if (digitWords.length < 8) return null;

      const sizeValues = digitWords.map((word) => orientation === "horizontal" ? word.bounds.height : word.bounds.width);
      const tolerance = Math.max(10, median(sizeValues) * 0.9);
      const coordinateAccessor = (word) => orientation === "horizontal" ? word.bounds.centerY : word.bounds.centerX;
      const clusters = clusterItemsByCoordinate(digitWords, coordinateAccessor, tolerance)
        .map((cluster) => {
          const deduped = new Map();
          cluster.items.forEach((word) => {
            const label = parseInt(word.normalizedText, 10);
            if (!Number.isFinite(label)) return;
            const prev = deduped.get(label);
            if (!prev || prev.confidence < word.confidence) {
              deduped.set(label, { ...word, label });
            }
          });
          const points = Array.from(deduped.values())
            .sort((a, b) => orientation === "horizontal"
              ? a.bounds.centerX - b.bounds.centerX
              : a.bounds.centerY - b.bounds.centerY);
          return {
            anchor: cluster.anchor,
            points
          };
        })
        .filter((cluster) => cluster.points.length >= 8);

      const filtered = clusters.filter((cluster) => {
        const position = cluster.anchor;
        return orientation === "horizontal"
          ? position < imageHeight * 0.4
          : position < imageWidth * 0.4;
      });

      const candidates = filtered.length ? filtered : clusters;
      candidates.sort((a, b) => b.points.length - a.points.length || a.anchor - b.anchor);
      return candidates[0] || null;
    }

    function scoreVerticalLine(imageData, x, top, bottom) {
      const { data, width, height } = imageData;
      const clampedX = clamp(Math.round(x), 1, width - 2);
      const startY = clamp(Math.floor(top), 0, height - 1);
      const endY = clamp(Math.ceil(bottom), 0, height - 1);
      let score = 0;
      let count = 0;
      for (let y = startY; y <= endY; y += 2) {
        const center = ((y * width) + clampedX) * 4;
        const left = center - 4;
        const right = center + 4;
        const luminance = (data[center] + data[center + 1] + data[center + 2]) / 3;
        const leftLum = (data[left] + data[left + 1] + data[left + 2]) / 3;
        const rightLum = (data[right] + data[right + 1] + data[right + 2]) / 3;
        score += (255 - luminance) + Math.abs(leftLum - rightLum) * 0.8;
        count += 1;
      }
      return count ? score / count : 0;
    }

    function scoreHorizontalLine(imageData, y, left, right) {
      const { data, width, height } = imageData;
      const clampedY = clamp(Math.round(y), 1, height - 2);
      const startX = clamp(Math.floor(left), 0, width - 1);
      const endX = clamp(Math.ceil(right), 0, width - 1);
      let score = 0;
      let count = 0;
      for (let x = startX; x <= endX; x += 2) {
        const center = ((clampedY * width) + x) * 4;
        const up = center - (width * 4);
        const down = center + (width * 4);
        const luminance = (data[center] + data[center + 1] + data[center + 2]) / 3;
        const upLum = (data[up] + data[up + 1] + data[up + 2]) / 3;
        const downLum = (data[down] + data[down + 1] + data[down + 2]) / 3;
        score += (255 - luminance) + Math.abs(upLum - downLum) * 0.8;
        count += 1;
      }
      return count ? score / count : 0;
    }

    function snapPredictedLines(predictedLines, scoreFn, searchRadius) {
      return predictedLines.map((line) => {
        let best = line;
        let bestScore = Number.NEGATIVE_INFINITY;
        for (let offset = -searchRadius; offset <= searchRadius; offset += 1) {
          const candidate = line + offset;
          const score = scoreFn(candidate);
          if (score > bestScore) {
            best = candidate;
            bestScore = score;
          }
        }
        return best;
      });
    }

    function detectChartGrid(sourceCanvas, ocrWords) {
      const imageWidth = sourceCanvas.width;
      const imageHeight = sourceCanvas.height;
      const topCluster = selectCoordinateCluster(ocrWords, "horizontal", imageWidth, imageHeight);
      const leftCluster = selectCoordinateCluster(ocrWords, "vertical", imageWidth, imageHeight);
      if (!topCluster || !leftCluster) return null;

      const topFit = fitIndexedLine(topCluster.points.map((word) => ({
        index: word.label - 1,
        coord: word.bounds.centerX
      })));
      const leftFit = fitIndexedLine(leftCluster.points.map((word) => ({
        index: word.label - 1,
        coord: word.bounds.centerY
      })));
      if (!topFit || !leftFit) return null;

      const columns = Math.max(...topCluster.points.map((word) => word.label));
      const rows = Math.max(...leftCluster.points.map((word) => word.label));
      if (columns < 6 || rows < 6 || topFit.step < 6 || leftFit.step < 6) return null;

      const predictedColumnLines = Array.from({ length: columns + 1 }, (_, index) =>
        topFit.intercept + ((index - 0.5) * topFit.step)
      );
      const predictedRowLines = Array.from({ length: rows + 1 }, (_, index) =>
        leftFit.intercept + ((index - 0.5) * leftFit.step)
      );

      const ctx = sourceCanvas.getContext("2d", { willReadFrequently: true });
      const imageData = ctx.getImageData(0, 0, imageWidth, imageHeight);
      const searchRadiusX = Math.max(2, Math.round(topFit.step * 0.22));
      const searchRadiusY = Math.max(2, Math.round(leftFit.step * 0.22));
      const columnLines = snapPredictedLines(
        predictedColumnLines,
        (candidate) => scoreVerticalLine(imageData, candidate, predictedRowLines[0], predictedRowLines[predictedRowLines.length - 1]),
        searchRadiusX
      );
      const rowLines = snapPredictedLines(
        predictedRowLines,
        (candidate) => scoreHorizontalLine(imageData, candidate, predictedColumnLines[0], predictedColumnLines[predictedColumnLines.length - 1]),
        searchRadiusY
      );

      return {
        left: columnLines[0],
        top: rowLines[0],
        right: columnLines[columnLines.length - 1],
        bottom: rowLines[rowLines.length - 1],
        columns,
        rows,
        cellWidth: median(columnLines.slice(1).map((line, index) => line - columnLines[index])),
        cellHeight: median(rowLines.slice(1).map((line, index) => line - rowLines[index])),
        columnLines,
        rowLines
      };
    }

    function locateIndexInLines(value, lines) {
      for (let index = 0; index < lines.length - 1; index += 1) {
        if (value >= lines[index] && value <= lines[index + 1]) {
          return index + 1;
        }
      }
      return -1;
    }

    function createGridCells(grid) {
      const cells = [];
      for (let row = 1; row <= grid.rows; row += 1) {
        for (let col = 1; col <= grid.columns; col += 1) {
          const x0 = grid.columnLines[col - 1];
          const y0 = grid.rowLines[row - 1];
          const x1 = grid.columnLines[col];
          const y1 = grid.rowLines[row];
          cells.push({
            key: getCellKey(row, col),
            row,
            col,
            bounds: {
              x0,
              y0,
              x1,
              y1,
              width: Math.max(1, x1 - x0),
              height: Math.max(1, y1 - y0)
            },
            words: [],
            rawText: "",
            normalizedId: "",
            source: "",
            confidence: 0,
            manualOverrideId: ""
          });
        }
      }
      return cells;
    }

    function sampleCellRepresentativeColor(cell, sourceCanvas) {
      const ctx = sourceCanvas.getContext("2d", { willReadFrequently: true });
      const insetX = Math.max(1, Math.round(cell.bounds.width * 0.16));
      const insetY = Math.max(1, Math.round(cell.bounds.height * 0.16));
      const sx = clamp(Math.round(cell.bounds.x0 + insetX), 0, sourceCanvas.width - 1);
      const sy = clamp(Math.round(cell.bounds.y0 + insetY), 0, sourceCanvas.height - 1);
      const sw = clamp(Math.round(cell.bounds.width - (insetX * 2)), 1, sourceCanvas.width - sx);
      const sh = clamp(Math.round(cell.bounds.height - (insetY * 2)), 1, sourceCanvas.height - sy);
      const imageData = ctx.getImageData(sx, sy, sw, sh).data;
      const samples = [];
      const step = Math.max(1, Math.floor(Math.min(sw, sh) / 10));

      for (let y = 0; y < sh; y += step) {
        for (let x = 0; x < sw; x += step) {
          const offset = ((y * sw) + x) * 4;
          const alpha = imageData[offset + 3];
          if (alpha < 16) continue;
          const rgb = {
            r: imageData[offset],
            g: imageData[offset + 1],
            b: imageData[offset + 2]
          };
          samples.push({
            ...rgb,
            luminance: (rgb.r * 0.299) + (rgb.g * 0.587) + (rgb.b * 0.114)
          });
        }
      }

      if (!samples.length) return { r: 255, g: 255, b: 255 };
      const sorted = samples.sort((a, b) => a.luminance - b.luminance);
      const start = Math.floor(sorted.length * 0.18);
      const end = Math.max(start + 1, Math.ceil(sorted.length * 0.88));
      const usable = sorted.slice(start, end);
      return weightedAverageRgb(usable);
    }

    function estimateEmptyBoardColor(cells, sourceCanvas, grid) {
      const cornerCandidates = cells.filter((cell) => (
        (cell.row <= 2 || cell.row >= grid.rows - 1) &&
        (cell.col <= 2 || cell.col >= grid.columns - 1) &&
        !cell.words.length
      )).slice(0, 12);

      if (!cornerCandidates.length) {
        return { r: 255, g: 255, b: 255 };
      }

      return weightedAverageRgb(cornerCandidates.map((cell) => ({
        rgb: sampleCellRepresentativeColor(cell, sourceCanvas)
      })));
    }

    function fallbackAssignCellByColor(cell, sourceCanvas) {
      const sampledRgb = sampleCellRepresentativeColor(cell, sourceCanvas);
      const nearest = findNearestPaletteColor(sampledRgb, state.settings.distanceMethod);
      return {
        rgb: sampledRgb,
        matchedId: nearest?.id || "",
        confidence: nearest ? Math.max(0, round(100 - nearest.distance, 1)) : 0
      };
    }

    function assignCellsWithOcrFirst(grid, ocrWords, sourceCanvas) {
      const cells = createGridCells(grid);
      const cellMap = new Map(cells.map((cell) => [cell.key, cell]));

      ocrWords.forEach((word) => {
        const centerX = word.bounds.centerX;
        const centerY = word.bounds.centerY;
        if (
          centerX < grid.left ||
          centerX > grid.right ||
          centerY < grid.top ||
          centerY > grid.bottom
        ) {
          return;
        }
        const col = locateIndexInLines(centerX, grid.columnLines);
        const row = locateIndexInLines(centerY, grid.rowLines);
        if (row === -1 || col === -1) return;
        const cell = cellMap.get(getCellKey(row, col));
        if (cell) {
          cell.words.push(word);
        }
      });

      cells.forEach((cell) => {
        cell.manualOverrideId = state.chartManualOverrides[cell.key] || "";
        if (!cell.words.length) return;
        const validWords = cell.words
          .map((word) => ({
            ...word,
            normalizedId: normalizeOcrColorId(word.rawText)
          }))
          .filter((word) => word.normalizedId);

        if (validWords.length) {
          validWords.sort((a, b) => b.confidence - a.confidence);
          const best = validWords[0];
          cell.rawText = best.rawText;
          cell.normalizedId = best.normalizedId;
          cell.source = "ocr";
          cell.confidence = best.confidence;
          return;
        }

        const fallbackWord = [...cell.words].sort((a, b) => b.confidence - a.confidence)[0];
        cell.rawText = fallbackWord.rawText;
        cell.source = "";
        cell.confidence = fallbackWord.confidence;
      });

      const validOcrCells = cells.filter((cell) => cell.source === "ocr" && cell.normalizedId);
      if (validOcrCells.length < 8) {
        return { cells, unresolvedCells: [], emptyBackgroundRgb: { r: 255, g: 255, b: 255 } };
      }

      const rowMin = Math.min(...validOcrCells.map((cell) => cell.row));
      const rowMax = Math.max(...validOcrCells.map((cell) => cell.row));
      const colMin = Math.min(...validOcrCells.map((cell) => cell.col));
      const colMax = Math.max(...validOcrCells.map((cell) => cell.col));
      const emptyBackgroundRgb = estimateEmptyBoardColor(cells, sourceCanvas, grid);

      cells.forEach((cell) => {
        if (cell.words.length || cell.normalizedId) return;
        const inRecognizedRange = (
          cell.row >= rowMin - 1 &&
          cell.row <= rowMax + 1 &&
          cell.col >= colMin - 1 &&
          cell.col <= colMax + 1
        );
        if (!inRecognizedRange) return;

        const hasActiveNeighbor = cells.some((other) =>
          other.normalizedId &&
          Math.abs(other.row - cell.row) <= 1 &&
          Math.abs(other.col - cell.col) <= 1 &&
          !(other.row === cell.row && other.col === cell.col)
        );
        const fallback = fallbackAssignCellByColor(cell, sourceCanvas);
        const backgroundDistance = rgbDistance(fallback.rgb, emptyBackgroundRgb);
        if (!hasActiveNeighbor && backgroundDistance < 22) {
          return;
        }

        if (fallback.matchedId) {
          cell.rawText = "";
          cell.normalizedId = fallback.matchedId;
          cell.source = "color-fallback";
          cell.confidence = fallback.confidence;
        }
      });

      const unresolvedCells = cells.filter((cell) =>
        cell.words.length &&
        !cell.normalizedId &&
        !cell.manualOverrideId
      );

      return {
        cells,
        unresolvedCells,
        emptyBackgroundRgb
      };
    }

    function getResolvedCellAssignment(cell) {
      const manualId = cell.manualOverrideId || state.chartManualOverrides[cell.key];
      if (manualId && paletteById[manualId]) {
        return {
          id: manualId,
          palette: paletteById[manualId],
          source: "manual"
        };
      }
      if (cell.normalizedId && paletteById[cell.normalizedId]) {
        return {
          id: cell.normalizedId,
          palette: paletteById[cell.normalizedId],
          source: cell.source
        };
      }
      return null;
    }

    function buildRecognizedIdSummary(cells) {
      const map = new Map();
      cells.forEach((cell) => {
        const resolved = getResolvedCellAssignment(cell);
        if (!resolved) return;
        const entry = map.get(resolved.id) || {
          id: resolved.id,
          count: 0,
          sourceCounts: { ocr: 0, "color-fallback": 0, manual: 0 },
          hex: resolved.palette.hex,
          rgb: resolved.palette.rgb
        };
        entry.count += 1;
        entry.sourceCounts[resolved.source] = (entry.sourceCounts[resolved.source] || 0) + 1;
        map.set(resolved.id, entry);
      });

      return Array.from(map.values())
        .sort((a, b) => sortPaletteIds(a.id, b.id));
    }

    function refreshChartRecognitionDerivedData() {
      if (!state.chartRecognition) return;
      state.chartRecognition.cells.forEach((cell) => {
        cell.manualOverrideId = state.chartManualOverrides[cell.key] || "";
      });
      state.chartRecognition.summary = buildRecognizedIdSummary(state.chartRecognition.cells);
      state.chartRecognition.unresolvedCells = state.chartRecognition.cells.filter((cell) =>
        cell.words.length &&
        !getResolvedCellAssignment(cell)
      );
    }

    async function recognizeChartColorsFromImage() {
      state.ocrStatusText = "正在準備 OCR...";
      renderRecognitionResults();
      const processed = preprocessBoardForOcr(state.sourceCanvas);
      const rawWords = await runBoardOcr(processed.canvas);
      const ocrPreview = extractOcrPreviewWords(rawWords, processed.scale);
      const grid = detectChartGrid(state.sourceCanvas, ocrPreview);
      if (!grid) {
        return null;
      }

      const { cells, unresolvedCells, emptyBackgroundRgb } = assignCellsWithOcrFirst(grid, ocrPreview, state.sourceCanvas);
      if (cells.filter((cell) => cell.normalizedId).length < 8) {
        return null;
      }

      const chartRecognition = {
        grid,
        cells,
        summary: [],
        ocrPreview,
        unresolvedCells,
        emptyBackgroundRgb
      };
      state.chartRecognition = chartRecognition;
      refreshChartRecognitionDerivedData();
      return chartRecognition;
    }

    function getCurrentColorLimit() {
      const mode = state.settings.colorLimitMode;
      if (mode === "custom") {
        return clamp(parseInt(state.settings.customColorLimit, 10) || 16, 2, 128);
      }
      return clamp(parseInt(mode, 10) || 16, 2, 128);
    }

    function getDistanceThreshold(method, mergeSimilar) {
      if (method === "rgb") {
        return mergeSimilar ? 34 : 22;
      }
      return mergeSimilar ? 12 : 7.5;
    }

    function getBucketStep(mergeSimilar) {
      return mergeSimilar ? 18 : 12;
    }

    function buildBucketKey(r, g, b, step) {
      const qr = clamp(Math.round(r / step) * step, 0, 255);
      const qg = clamp(Math.round(g / step) * step, 0, 255);
      const qb = clamp(Math.round(b / step) * step, 0, 255);
      return `${qr}-${qg}-${qb}`;
    }

    function extractDominantColors(imageData, settings) {
      const { data, width, height } = imageData;
      const bucketStep = getBucketStep(settings.mergeSimilar);
      const mergeThreshold = getDistanceThreshold(settings.distanceMethod, settings.mergeSimilar);
      const totalPixels = width * height;
      const buckets = new Map();
      let sampledPixelCount = 0;

      for (let index = 0; index < totalPixels; index += 1) {
        const offset = index * 4;
        const alpha = data[offset + 3];
        if (settings.ignoreTransparent && alpha < 16) {
          continue;
        }
        const r = data[offset];
        const g = data[offset + 1];
        const b = data[offset + 2];
        const bucketKey = buildBucketKey(r, g, b, bucketStep);
        const bucket = buckets.get(bucketKey) || {
          key: bucketKey,
          sumR: 0,
          sumG: 0,
          sumB: 0,
          count: 0
        };
        bucket.sumR += r;
        bucket.sumG += g;
        bucket.sumB += b;
        bucket.count += 1;
        buckets.set(bucketKey, bucket);
        sampledPixelCount += 1;
      }

      const bucketEntries = Array.from(buckets.values())
        .map((bucket) => {
          const rgb = {
            r: Math.round(bucket.sumR / bucket.count),
            g: Math.round(bucket.sumG / bucket.count),
            b: Math.round(bucket.sumB / bucket.count)
          };
          return {
            ...bucket,
            rgb,
            lab: rgbToLab(rgb)
          };
        })
        .sort((a, b) => b.count - a.count);

      const mergedClusters = [];
      const bucketToMergedIndex = new Map();

      bucketEntries.forEach((bucket) => {
        let bestIndex = -1;
        let bestDistance = Number.POSITIVE_INFINITY;

        mergedClusters.forEach((cluster, index) => {
          const distance = settings.mergeSimilar
            ? colorDistance(bucket.rgb, cluster.rgb, settings.distanceMethod)
            : Number.POSITIVE_INFINITY;
          if (distance < bestDistance) {
            bestDistance = distance;
            bestIndex = index;
          }
        });

        if (bestIndex !== -1 && bestDistance <= mergeThreshold) {
          const cluster = mergedClusters[bestIndex];
          cluster.sumR += bucket.rgb.r * bucket.count;
          cluster.sumG += bucket.rgb.g * bucket.count;
          cluster.sumB += bucket.rgb.b * bucket.count;
          cluster.count += bucket.count;
          cluster.bucketKeys.push(bucket.key);
          cluster.rgb = {
            r: Math.round(cluster.sumR / cluster.count),
            g: Math.round(cluster.sumG / cluster.count),
            b: Math.round(cluster.sumB / cluster.count)
          };
          cluster.lab = rgbToLab(cluster.rgb);
          bucketToMergedIndex.set(bucket.key, bestIndex);
        } else {
          mergedClusters.push({
            sumR: bucket.rgb.r * bucket.count,
            sumG: bucket.rgb.g * bucket.count,
            sumB: bucket.rgb.b * bucket.count,
            count: bucket.count,
            bucketKeys: [bucket.key],
            rgb: bucket.rgb,
            lab: bucket.lab
          });
          bucketToMergedIndex.set(bucket.key, mergedClusters.length - 1);
        }
      });

      const limit = getCurrentColorLimit();
      const finalSeeds = mergedClusters.length > limit
        ? mergedClusters.slice(0, limit).map((cluster) => ({
            sumR: 0,
            sumG: 0,
            sumB: 0,
            count: 0,
            bucketKeys: []
          }))
        : null;
      const mergedToFinalIndex = new Map();

      if (finalSeeds) {
        mergedClusters.forEach((cluster, clusterIndex) => {
          let bestSeedIndex = 0;
          let bestDistance = Number.POSITIVE_INFINITY;
          finalSeeds.forEach((seed, seedIndex) => {
            const seedRgb = seed.count > 0
              ? {
                  r: Math.round(seed.sumR / seed.count),
                  g: Math.round(seed.sumG / seed.count),
                  b: Math.round(seed.sumB / seed.count)
                }
              : mergedClusters[seedIndex].rgb;
            const distance = colorDistance(cluster.rgb, seedRgb, settings.distanceMethod);
            if (distance < bestDistance) {
              bestDistance = distance;
              bestSeedIndex = seedIndex;
            }
          });
          const seed = finalSeeds[bestSeedIndex];
          seed.sumR += cluster.rgb.r * cluster.count;
          seed.sumG += cluster.rgb.g * cluster.count;
          seed.sumB += cluster.rgb.b * cluster.count;
          seed.count += cluster.count;
          seed.bucketKeys.push(...cluster.bucketKeys);
          mergedToFinalIndex.set(clusterIndex, bestSeedIndex);
        });
      } else {
        mergedClusters.forEach((cluster, clusterIndex) => {
          mergedToFinalIndex.set(clusterIndex, clusterIndex);
        });
      }

      const finalClustersBase = (finalSeeds || mergedClusters).map((cluster, index) => {
        const rgb = cluster.count > 0
          ? {
              r: Math.round(cluster.sumR / cluster.count),
              g: Math.round(cluster.sumG / cluster.count),
              b: Math.round(cluster.sumB / cluster.count)
            }
          : cluster.rgb;
        const topCandidates = findTopNearestPaletteColors(rgb, 3, settings.distanceMethod);
        const nearest = topCandidates[0];
        return {
          key: `cluster-${index + 1}`,
          rawRgb: [rgb.r, rgb.g, rgb.b],
          rawHex: rgbToHex(rgb),
          count: cluster.count,
          ratio: sampledPixelCount === 0 ? 0 : cluster.count / sampledPixelCount,
          matchedId: nearest.id,
          matchedHex: nearest.hex,
          matchedRgb: nearest.rgb,
          distance: nearest.distance,
          topCandidates,
          manualOverrideId: null,
          bucketKeys: [...cluster.bucketKeys]
        };
      });

      const bucketToFinalIndex = new Map();
      bucketToMergedIndex.forEach((mergedIndex, bucketKey) => {
        bucketToFinalIndex.set(bucketKey, mergedToFinalIndex.get(mergedIndex));
      });

      const pixelAssignments = new Int16Array(totalPixels);
      pixelAssignments.fill(-1);
      for (let index = 0; index < totalPixels; index += 1) {
        const offset = index * 4;
        const alpha = data[offset + 3];
        if (settings.ignoreTransparent && alpha < 16) {
          continue;
        }
        const bucketKey = buildBucketKey(data[offset], data[offset + 1], data[offset + 2], bucketStep);
        const finalIndex = bucketToFinalIndex.get(bucketKey);
        if (typeof finalIndex === "number") {
          pixelAssignments[index] = finalIndex;
        }
      }

      return {
        rawResults: finalClustersBase
          .sort((a, b) => b.count - a.count)
          .map((result) => ({
            ...result,
            ratio: sampledPixelCount === 0 ? 0 : result.count / sampledPixelCount
          })),
        sampledPixelCount,
        sampleWidth: width,
        sampleHeight: height,
        pixelAssignments
      };
    }

    function getAnalysisSettingsSnapshot() {
      return {
        colorLimit: getCurrentColorLimit(),
        ignoreTransparent: state.settings.ignoreTransparent,
        mergeSimilar: state.settings.mergeSimilar,
        mode: state.settings.mode,
        distanceMethod: state.settings.distanceMethod
      };
    }

    function getEffectivePaletteIdForCluster(cluster) {
      return state.manualOverrides[cluster.key] || cluster.matchedId;
    }

    function getDisplayedResults() {
      if (!state.analysis) return [];

      const rawResults = state.analysis.rawResults.map((cluster) => {
        const effectiveId = paletteById[getEffectivePaletteIdForCluster(cluster)]
          ? getEffectivePaletteIdForCluster(cluster)
          : cluster.matchedId;
        const paletteColor = paletteById[effectiveId];
        return {
          key: cluster.key,
          rawHex: cluster.rawHex,
          rawRgb: cluster.rawRgb,
          count: cluster.count,
          ratio: cluster.ratio,
          matchedId: paletteColor.id,
          matchedHex: paletteColor.hex,
          matchedRgb: paletteColor.rgb,
          distance: round(colorDistance(cluster.rawRgb, paletteColor.rgb, state.settings.distanceMethod), 2),
          topCandidates: findTopNearestPaletteColors(cluster.rawRgb, 3, state.settings.distanceMethod),
          manualOverrideId: state.manualOverrides[cluster.key] || null,
          sources: [cluster.key],
          displayType: "raw",
          sourceCount: 1
        };
      });

      if (state.settings.mode === "raw") {
        return rawResults.sort((a, b) => b.count - a.count);
      }

      const grouped = new Map();
      rawResults.forEach((cluster) => {
        const groupKey = cluster.matchedId;
        const bucket = grouped.get(groupKey) || {
          key: `match-${groupKey}`,
          matchedId: cluster.matchedId,
          matchedHex: cluster.matchedHex,
          matchedRgb: cluster.matchedRgb,
          count: 0,
          sources: [],
          members: [],
          hasManualOverride: false
        };
        bucket.count += cluster.count;
        bucket.sources.push(...cluster.sources);
        bucket.members.push(cluster);
        bucket.hasManualOverride = bucket.hasManualOverride || Boolean(cluster.manualOverrideId);
        grouped.set(groupKey, bucket);
      });

      return Array.from(grouped.values())
        .map((group) => {
          const averageRgb = weightedAverageRgb(group.members.map((member) => ({
            rgb: member.rawRgb,
            count: member.count
          })));
          const topCandidates = findTopNearestPaletteColors(averageRgb, 3, state.settings.distanceMethod);
          return {
            key: group.key,
            rawHex: rgbToHex(averageRgb),
            rawRgb: [averageRgb.r, averageRgb.g, averageRgb.b],
            count: group.count,
            ratio: state.analysis.sampledPixelCount === 0 ? 0 : group.count / state.analysis.sampledPixelCount,
            matchedId: group.matchedId,
            matchedHex: group.matchedHex,
            matchedRgb: group.matchedRgb,
            distance: round(colorDistance(averageRgb, group.matchedRgb, state.settings.distanceMethod), 2),
            topCandidates,
            manualOverrideId: group.hasManualOverride ? group.matchedId : null,
            sources: group.sources,
            displayType: "match",
            sourceCount: group.members.length
          };
        })
        .sort((a, b) => b.count - a.count);
    }

    function getResultBySourceKey(sourceKey) {
      return getDisplayedResults().find((item) => item.sources.includes(sourceKey)) || null;
    }

    function createSimulatorColorDescriptor(colorInput, options = {}) {
      const rgb = normalizeColorInput(colorInput);
      const hex = options.hex || rgbToHex(rgb);
      return {
        id: options.id || "",
        label: options.label || options.id || hex,
        hex,
        rgb: [rgb.r, rgb.g, rgb.b],
        map: mapColorToTomodachiPalette(rgb)
      };
    }

    function createSimulatorFocus({ sourceType, sourceLabel, mode = "single", primary, secondary = null, note = "" }) {
      return {
        sourceType,
        sourceLabel,
        mode,
        note,
        primaryId: primary.id || "",
        primaryLabel: primary.label,
        primaryRgb: primary.rgb,
        primaryHex: primary.hex,
        primaryMap: primary.map,
        secondaryId: secondary?.id || "",
        secondaryLabel: secondary?.label || "",
        secondaryRgb: secondary?.rgb || null,
        secondaryHex: secondary?.hex || "",
        secondaryMap: secondary?.map || null
      };
    }

    function buildDefaultSimulatorFocus() {
      const item = paletteById.A1;
      const primary = createSimulatorColorDescriptor(item.rgb, {
        id: item.id,
        label: `預設拼豆色 ${item.id}`,
        hex: item.hex
      });
      return createSimulatorFocus({
        sourceType: "default",
        sourceLabel: `目前定位：${item.id}`,
        primary,
        note: "尚未選擇其他顏色時，預設以 A1 作為色盤定位示意。"
      });
    }

    function buildSimulatorFocusFromPalette(item) {
      const primary = createSimulatorColorDescriptor(item.rgb, {
        id: item.id,
        label: `色票 ${item.id}`,
        hex: item.hex
      });
      return createSimulatorFocus({
        sourceType: "palette",
        sourceLabel: `目前定位：${item.id}`,
        primary,
        note: `已切換到內建色卡 ${item.id}，可以直接照著底部色相條與上方色盤的位置找色。`
      });
    }

    function buildSimulatorFocusFromResult(item) {
      const matchedColor = paletteById[item.matchedId];
      const primary = createSimulatorColorDescriptor(matchedColor.rgb, {
        id: matchedColor.id,
        label: `匹配拼豆 ${matchedColor.id}`,
        hex: matchedColor.hex
      });
      const secondary = createSimulatorColorDescriptor(item.rawRgb, {
        label: `原始抓色 ${item.rawHex}`,
        hex: item.rawHex
      });
      return createSimulatorFocus({
        sourceType: "result",
        sourceLabel: `目前定位：${matchedColor.id}`,
        mode: "dual",
        primary,
        secondary,
        note: `主標記是目前生效的拼豆色，副標記是圖中原始抓色，方便你比較兩者差距。`
      });
    }

    function enrichPixelDetailItem(pixelInfo) {
      const rawRgb = normalizeColorInput(pixelInfo.rgb);
      const topCandidates = pixelInfo.topCandidates?.length
        ? pixelInfo.topCandidates
        : findTopNearestPaletteColors(rawRgb, 3, state.settings.distanceMethod);
      const matchedColor = topCandidates[0];
      return {
        ...pixelInfo,
        rgb: [rawRgb.r, rawRgb.g, rawRgb.b],
        hex: pixelInfo.hex || rgbToHex(rawRgb),
        topCandidates,
        matchedColor,
        rawMap: mapColorToTomodachiPalette(rawRgb),
        matchedMap: mapColorToTomodachiPalette(matchedColor.rgb),
        displayMode: pixelInfo.displayMode || "raw"
      };
    }

    function buildSimulatorFocusFromPixel(pixelInfo, mode = pixelInfo.displayMode || "raw") {
      const item = enrichPixelDetailItem(pixelInfo);
      const raw = createSimulatorColorDescriptor(item.rgb, {
        label: `實際抓色 ${item.hex}`,
        hex: item.hex
      });
      const matched = createSimulatorColorDescriptor(item.matchedColor.rgb, {
        id: item.matchedColor.id,
        label: `建議拼豆 ${item.matchedColor.id}`,
        hex: item.matchedColor.hex
      });
      const primary = mode === "matched" ? matched : raw;
      const secondary = mode === "matched" ? raw : matched;
      const focusLabel = mode === "matched"
        ? `目前定位：建議拼豆 ${matched.id || matched.label}`
        : `目前定位：像素抓色 ${raw.hex}`;
      const note = `像素座標 (${item.x}, ${item.y})。主標記是目前主視圖追蹤的顏色，副標記是另一個對照點。`;

      return createSimulatorFocus({
        sourceType: "pixel",
        sourceLabel: focusLabel,
        mode: "dual",
        primary,
        secondary,
        note
      });
    }

    function ensureSimulatorFocus() {
      if (!state.simulatorFocus) {
        state.simulatorFocus = buildDefaultSimulatorFocus();
      }
      return state.simulatorFocus;
    }

    function setSimulatorFocus(focus) {
      state.simulatorFocus = focus || buildDefaultSimulatorFocus();
    }

    function getDetailDisplayColor(detail) {
      if (!detail && state.activeResultKey) {
        const activeItem = getDisplayedResults().find((item) => item.key === state.activeResultKey);
        return activeItem ? paletteById[activeItem.matchedId] || activeItem.topCandidates?.[0] || null : null;
      }
      if (!detail) return null;
      if (detail.type === "palette") {
        return paletteById[detail.id] || null;
      }
      if (detail.type === "result") {
        return paletteById[detail.item.matchedId] || detail.item.topCandidates?.[0] || null;
      }
      if (detail.type === "pixel") {
        return detail.item.topCandidates?.[0] || null;
      }
      return null;
    }

    function setRecentView(paletteId) {
      if (!paletteById[paletteId]) return;
      state.recentViews = [paletteId, ...state.recentViews.filter((id) => id !== paletteId)].slice(0, MAX_RECENT);
      saveState();
      renderRecentViews();
    }

    function showToast(message) {
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = message;
      els.toastWrap.appendChild(toast);
      window.setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(8px)";
      }, 2100);
      window.setTimeout(() => toast.remove(), 2600);
    }

    function copyText(text, successMessage = "已複製") {
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text)
          .then(() => showToast(successMessage))
          .catch(() => fallbackCopyText(text, successMessage));
      } else {
        fallbackCopyText(text, successMessage);
      }
    }

    function fallbackCopyText(text, successMessage) {
      const tempInput = document.createElement("textarea");
      tempInput.value = text;
      tempInput.setAttribute("readonly", "");
      tempInput.style.position = "absolute";
      tempInput.style.left = "-9999px";
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      tempInput.remove();
      showToast(successMessage);
    }

    function downloadTextFile(filename, content, mimeType) {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    }

    function formatRgb(rgb) {
      const color = normalizeColorInput(rgb);
      return `${color.r}, ${color.g}, ${color.b}`;
    }

    function formatRatio(ratio) {
      return `${round(ratio * 100, 2)}%`;
    }

    function formatDistance(distance) {
      return state.settings.distanceMethod === "rgb"
        ? `${round(distance, 1)} RGB`
        : `${round(distance, 2)} ΔE`;
    }

    function formatDisplayLabel(item) {
      if (item.displayType === "raw") {
        return item.manualOverrideId ? "手動指定後" : "建議拼豆色";
      }
      return item.sourceCount > 1 ? `合併 ${item.sourceCount} 群色` : "匹配拼豆色";
    }

    function renderHeroBands() {
      const bandA = BUILTIN_PALETTE.slice(0, 7);
      const bandB = [
        paletteById.D13,
        paletteById.E13,
        paletteById.C4,
        paletteById.B4,
        paletteById.G10,
        paletteById.H1,
        paletteById.M13
      ];
      els.heroBandA.innerHTML = bandA.map((item) => `<span style="background:${item.hex}"></span>`).join("");
      els.heroBandB.innerHTML = bandB.map((item) => `<span style="background:${item.hex}"></span>`).join("");
    }

    function syncSettingsInputs() {
      els.heroPaletteCount.textContent = BUILTIN_PALETTE.length;
      els.paletteStatusPill.textContent = `已載入 ${BUILTIN_PALETTE.length} 色`;
      els.paletteCountPill.textContent = `${BUILTIN_PALETTE.length} 色`;
      els.colorLimitSelect.value = state.settings.colorLimitMode;
      els.customColorLimitInput.value = state.settings.customColorLimit;
      els.customColorLimitInput.disabled = state.settings.colorLimitMode !== "custom";
      els.distanceMethodSelect.value = state.settings.distanceMethod;
      els.ignoreTransparentCheckbox.checked = state.settings.ignoreTransparent;
      els.mergeSimilarCheckbox.checked = state.settings.mergeSimilar;
      els.analysisModeRadios.forEach((radio) => {
        radio.checked = radio.value === state.settings.mode;
      });
      els.zoomRange.value = Math.round(state.settings.zoom * 100);
      els.zoomLabel.textContent = `${Math.round(state.settings.zoom * 100)}%`;
    }

    function renderPaletteOptions() {
      els.paletteIdOptions.innerHTML = BUILTIN_PALETTE
        .map((item) => `<option value="${item.id}">${item.id} ${item.hex}</option>`)
        .join("");
    }

    function renderRecentViews() {
      if (!els.recentColors) return;
      if (!state.recentViews.length) {
        els.recentColors.innerHTML = `<div class="empty-state">目前還沒有最近查看色。點一下任一色票後，這裡會自動記錄。</div>`;
        return;
      }

      els.recentColors.innerHTML = state.recentViews
        .map((id) => {
          const item = paletteById[id];
          return `
            <div class="color-chip">
              <button type="button" data-action="open-palette" data-id="${item.id}">
                <span class="swatch small" style="background:${item.hex}"></span>
                <span class="meta">
                  <strong>${item.id}</strong>
                  <span>${item.hex}</span>
                </span>
              </button>
            </div>
          `;
        })
        .join("");
    }

    function renderPaletteBrowser() {
      const query = state.paletteSearch.trim().toLowerCase();
      const filtered = BUILTIN_PALETTE.filter((item) => {
        if (!query) return true;
        return item.id.toLowerCase().includes(query) ||
          item.hex.toLowerCase().includes(query) ||
          item.name.toLowerCase().includes(query);
      });

      els.paletteSearchSummary.textContent = query
        ? `找到 ${filtered.length} 筆結果。`
        : `顯示全部 ${BUILTIN_PALETTE.length} 色。`;

      els.paletteBrowser.innerHTML = filtered.length
        ? filtered.map((item) => `
            <button type="button" class="palette-card ${state.detail?.type === "palette" && state.detail.id === item.id ? "is-active" : ""}" data-action="open-palette" data-id="${item.id}">
              <span class="swatch" style="background:${item.hex}"></span>
              <strong>${item.id}</strong>
              <span class="mono">${item.hex}</span>
            </button>
          `).join("")
        : `<div class="empty-state">找不到符合「${escapeHtml(query)}」的色票。</div>`;
    }

    function renderTop10() {
      const recognizedTop = state.chartRecognition?.summary?.slice(0, 10) || [];
      if (recognizedTop.length) {
        const totalCells = state.chartRecognition.cells
          .filter((cell) => getResolvedCellAssignment(cell))
          .length || 1;
        els.top10Colors.innerHTML = recognizedTop.map((item) => `
          <div class="color-chip">
            <button type="button" data-action="open-palette" data-id="${item.id}">
              <span class="swatch small" style="background:${item.hex}"></span>
              <span class="meta">
                <strong>${item.id}</strong>
                <span>${item.count} 格 / ${formatRatio(item.count / totalCells)}</span>
              </span>
            </button>
          </div>
        `).join("");
        return;
      }

      const results = getDisplayedResults().slice(0, 10);
      if (!results.length) {
        els.top10Colors.innerHTML = `<div class="empty-state">還沒有分析結果。上傳圖片後，這裡會列出最常用前 10 色。</div>`;
        return;
      }

      els.top10Colors.innerHTML = results.map((item) => `
        <div class="color-chip">
          <button type="button" data-action="open-result" data-key="${item.key}">
            <span class="swatch small" style="background:${item.matchedHex}"></span>
            <span class="meta">
              <strong>${item.matchedId}</strong>
              <span>${formatRatio(item.ratio)} / ${item.matchedHex}</span>
            </span>
          </button>
        </div>
      `).join("");
    }

    function renderPreviewModeControls() {
      const hasRecognition = Boolean(state.chartRecognition?.cells?.length);
      if (state.previewInteractionMode === "cell" && !hasRecognition) {
        state.previewInteractionMode = "pixel";
      }

      els.pixelModeButton.classList.toggle("is-active", state.previewInteractionMode === "pixel");
      els.cellModeButton.classList.toggle("is-active", state.previewInteractionMode === "cell");
      els.pixelModeButton.disabled = !state.sourceImage;
      els.cellModeButton.disabled = !hasRecognition;
      els.pixelModeButton.setAttribute("aria-pressed", String(state.previewInteractionMode === "pixel"));
      els.cellModeButton.setAttribute("aria-pressed", String(state.previewInteractionMode === "cell"));

      if (!state.sourceImage) {
        els.previewModeText.textContent = "先上傳圖片後，再選擇像素取樣或格子修正。";
        return;
      }

      if (!hasRecognition) {
        els.previewModeText.textContent = "目前可用像素取樣。若這張圖有規則格線與色號，分析後會自動開啟格子修正模式。";
        return;
      }

      els.previewModeText.textContent = state.previewInteractionMode === "cell"
        ? "目前是格子修正模式：點格子可查看 OCR / 回退來源，並手動指定色號。"
        : "目前是像素取樣模式：移動滑鼠看當前像素，點擊可看候選拼豆色。";
    }

    function renderRecognitionResults() {
      const recognition = state.chartRecognition;
      const previewWords = recognition?.ocrPreview || [];

      if (!state.sourceImage) {
        els.recognitionSummaryPill.textContent = "尚未辨識";
        els.recognitionStatusBox.innerHTML = `<div class="empty-state">上傳拼豆圖後，這裡會先顯示色號辨識結果，再補上沒有文字的顏色回退結果。</div>`;
        els.recognizedIdList.innerHTML = `<div class="empty-state">尚未有可辨識的色號。</div>`;
        els.ocrPreviewList.innerHTML = `<div class="empty-state">OCR 預覽會顯示在這裡。</div>`;
        return;
      }

      if (state.isAnalyzing) {
        els.recognitionSummaryPill.textContent = "辨識中";
      } else if (recognition?.summary?.length) {
        els.recognitionSummaryPill.textContent = `${recognition.summary.length} 色號`;
      } else {
        els.recognitionSummaryPill.textContent = "未建立色號層";
      }

      const unresolvedCount = recognition?.unresolvedCells?.length || 0;
      const recognizedCount = recognition?.cells?.filter((cell) => getResolvedCellAssignment(cell)).length || 0;
      const statusText = state.ocrStatusText || (
        recognition
          ? `已建立格子辨識圖層。成功辨識 ${recognizedCount} 格，待手動修正 ${unresolvedCount} 格。`
          : "這張圖目前沒有建立出可用的格子辨識圖層，已保留一般顏色分析結果。"
      );
      els.recognitionStatusBox.innerHTML = `<p>${escapeHtml(statusText)}</p>`;

      if (recognition?.summary?.length) {
        els.recognizedIdList.innerHTML = recognition.summary.map((entry) => `
          <article class="recognition-card">
            <div class="recognition-card-head">
              <div class="swatch-line">
                <span class="swatch small" style="background:${entry.hex}"></span>
                <div>
                  <strong>${entry.id}</strong>
                  <div class="mono">${entry.hex}</div>
                </div>
              </div>
              <span class="recognition-card-count">${entry.count} 格</span>
            </div>
            <div class="tiny">OCR ${entry.sourceCounts.ocr || 0} / 顏色回退 ${entry.sourceCounts["color-fallback"] || 0} / 手動 ${entry.sourceCounts.manual || 0}</div>
            <div class="result-actions">
              <button type="button" class="mini-btn" data-action="open-palette" data-id="${entry.id}">查看色卡</button>
              <button type="button" class="mini-btn" data-action="copy-hex" data-hex="${entry.hex}">複製 HEX</button>
            </div>
          </article>
        `).join("");
      } else {
        els.recognizedIdList.innerHTML = `<div class="empty-state">目前沒有成功辨識出符合拼豆色號格式的內容。</div>`;
      }

      if (previewWords.length) {
        els.ocrPreviewList.innerHTML = previewWords
          .slice(0, 120)
          .map((word) => {
            const normalized = normalizeOcrColorId(word.rawText);
            return `
              <div class="ocr-preview-row">
                <strong>${escapeHtml(word.rawText || "(空白)")}</strong>
                <span>${normalized ? `正規化：${normalized}` : "未命中色號"}</span>
                <span>信心 ${round(word.confidence, 1)}%</span>
              </div>
            `;
          })
          .join("");
      } else {
        els.ocrPreviewList.innerHTML = `<div class="empty-state">${state.isAnalyzing ? "正在整理 OCR 預覽..." : "還沒有 OCR 預覽內容。"}</div>`;
      }
    }

    function renderResults() {
      const results = getDisplayedResults();
      const hasAnalysis = Boolean(state.analysis);
      els.exportJsonButton.disabled = !hasAnalysis || !results.length;
      els.exportCsvButton.disabled = !hasAnalysis || !results.length;
      els.exportSwatchesButton.disabled = !hasAnalysis || !results.length;

      if (!results.length) {
        els.resultsList.innerHTML = `<div class="empty-state">分析結果會顯示在這裡。你可以切換原始抓色 / 自動匹配拼豆色卡，並從詳細資訊裡手動修正結果。</div>`;
        return;
      }

      els.resultsList.innerHTML = `
        <div class="analysis-table">
          <div class="analysis-table-header">
            <span>色號</span>
            <span>顏色預覽</span>
            <span>HEX / RGB</span>
            <span>出現次數</span>
            <span>百分比</span>
            <span>色盤位置（模擬）</span>
            <span>操作</span>
          </div>
          ${results.map((item) => {
            const mapped = mapColorToTomodachiPalette(item.matchedRgb);
            return `
              <article class="analysis-table-row ${state.activeResultKey === item.key ? "is-active" : ""}">
                <div class="analysis-table-cell analysis-color-cell">
                  <strong>${item.matchedId}</strong>
                  <span class="badge">${formatDisplayLabel(item)}</span>
                  ${item.manualOverrideId ? `<span class="badge alt">手動修正</span>` : ""}
                  ${item.displayType === "raw" ? `<span class="badge gray">原始色 ${item.rawHex}</span>` : ""}
                </div>
                <div class="analysis-table-cell analysis-swatch-cell">
                  <span class="swatch" style="background:${item.matchedHex}"></span>
                </div>
                <div class="analysis-table-cell analysis-code-cell">
                  <strong class="mono">${item.matchedHex}</strong>
                  <span>RGB ${formatRgb(item.matchedRgb)}</span>
                </div>
                <div class="analysis-table-cell">
                  <strong>${item.count.toLocaleString()}</strong>
                </div>
                <div class="analysis-table-cell">
                  <strong>${formatRatio(item.ratio)}</strong>
                </div>
                <div class="analysis-table-cell analysis-position-cell">
                  <span>色相 ${Math.round(mapped.hueSliderX)}%</span>
                  <span>X ${Math.round(mapped.paletteX)}% / Y ${Math.round(mapped.paletteY)}%</span>
                </div>
                <div class="analysis-table-cell analysis-action-cell">
                  <button type="button" class="mini-btn" data-action="open-result" data-key="${item.key}">查看</button>
                  <button type="button" class="mini-btn" data-action="copy-hex" data-hex="${item.matchedHex}">複製</button>
                  <button type="button" class="mini-btn" data-action="highlight-result" data-key="${item.key}">高亮</button>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      `;
    }

    function renderHoverInspector() {
      if (state.previewInteractionMode === "cell") {
        if (!state.chartRecognition) {
          els.hoverInspector.innerHTML = `
            <h4>格子預覽</h4>
            <p>這張圖目前沒有建立出格子辨識圖層，請先分析有規則格線與色號的拼豆圖。</p>
          `;
          return;
        }

        const cell = getChartCellByKey(state.hoverCellKey);
        if (!cell) {
          els.hoverInspector.innerHTML = `
            <h4>格子預覽</h4>
            <p>移到圖片格子上時，這裡會顯示該格目前採用的色號、來源與座標。</p>
          `;
          return;
        }

        const resolved = getResolvedCellAssignment(cell);
        els.hoverInspector.innerHTML = `
          <h4>格子預覽</h4>
          <div class="swatch-line">
            <span class="swatch small" style="background:${resolved?.palette?.hex || "#ffffff"}"></span>
            <div>
              <div><strong>${cell.key}</strong>${resolved ? ` / ${resolved.id}` : " / 未決定"}</div>
              <div class="tiny">${cell.rawText ? `OCR：${escapeHtml(cell.rawText)}` : "這格目前沒有抓到文字"}</div>
            </div>
          </div>
          <p>${resolved ? `來源：${resolved.source === "ocr" ? "OCR" : resolved.source === "manual" ? "手動指定" : "顏色回退"}` : "目前尚未有有效色號，可點一下進行手動修正。"}${cell.confidence ? ` / 信心 ${round(cell.confidence, 1)}%` : ""}</p>
        `;
        return;
      }

      if (!state.hoverPixel) {
        els.hoverInspector.innerHTML = `
          <h4>滑鼠取色</h4>
          <p>移到圖片上時，這裡會顯示當前像素的 HEX 與 RGB。</p>
        `;
        return;
      }

      const pixel = state.hoverPixel;
      els.hoverInspector.innerHTML = `
        <h4>滑鼠取色</h4>
        <div class="swatch-line">
          <span class="swatch small" style="background:${pixel.hex}"></span>
          <div>
            <div class="mono">${pixel.hex}</div>
            <div class="tiny">RGB ${formatRgb(pixel.rgb)} / (${pixel.x}, ${pixel.y})</div>
          </div>
        </div>
        <p>${describeHexPosition(pixel.rgb)}</p>
      `;
    }

    function renderClickInspector() {
      if (state.previewInteractionMode === "cell") {
        if (!state.chartRecognition) {
          els.clickInspector.innerHTML = `
            <h4>格子修正</h4>
            <p>這張圖目前沒有可用的格子辨識結果。</p>
          `;
          return;
        }

        const cell = state.detail?.type === "cell"
          ? getChartCellByKey(state.detail.key)
          : null;
        if (!cell) {
          els.clickInspector.innerHTML = `
            <h4>格子修正</h4>
            <p>點一下某一格後，這裡會顯示它的 OCR 結果、是否走顏色回退，並可開啟手動修正。</p>
          `;
          return;
        }

        const resolved = getResolvedCellAssignment(cell);
        els.clickInspector.innerHTML = `
          <h4>格子修正</h4>
          <div class="swatch-line">
            <span class="swatch small" style="background:${resolved?.palette?.hex || "#ffffff"}"></span>
            <div>
              <div><strong>${cell.key}</strong>${resolved ? ` / ${resolved.id}` : " / 未決定"}</div>
              <div class="tiny">${cell.rawText ? `OCR：${escapeHtml(cell.rawText)}` : "這格沒有辨識到文字"}</div>
            </div>
          </div>
          <div class="tiny">${resolved ? `來源：${resolved.source === "ocr" ? "OCR" : resolved.source === "manual" ? "手動指定" : "顏色回退"}` : "目前等待手動修正"}${cell.confidence ? ` / 信心 ${round(cell.confidence, 1)}%` : ""}</div>
        `;
        return;
      }

      if (!state.clickedPixel) {
        els.clickInspector.innerHTML = `
          <h4>點擊候選色</h4>
          <p>點一下圖片後，這裡會顯示最近拼豆色與前 3 名候選色。</p>
        `;
        return;
      }

      const pixel = state.clickedPixel;
      els.clickInspector.innerHTML = `
        <h4>點擊候選色</h4>
        <div class="swatch-line">
          <span class="swatch small" style="background:${pixel.hex}"></span>
          <div>
            <div class="mono">${pixel.hex}</div>
            <div class="tiny">RGB ${formatRgb(pixel.rgb)} / (${pixel.x}, ${pixel.y})</div>
          </div>
        </div>
        <div class="tiny">最接近：${pixel.topCandidates[0].id} ${pixel.topCandidates[0].hex} / ${formatDistance(pixel.topCandidates[0].distance)}</div>
        <div class="candidate-list">
          ${pixel.topCandidates.map((candidate, index) => `
            <div class="candidate-row">
              <span class="rank">${index + 1}</span>
              <span class="swatch small" style="background:${candidate.hex}"></span>
              <span class="text">
                <strong>${candidate.id} ${candidate.hex}</strong>
                <span>RGB ${formatRgb(candidate.rgb)} / ${formatDistance(candidate.distance)}</span>
              </span>
              <button type="button" class="mini-btn" data-action="open-palette" data-id="${candidate.id}">查看色卡</button>
            </div>
          `).join("")}
        </div>
      `;
    }

    function getPreviewBaseScale(imageWidth, imageHeight) {
      const availableWidth = Math.max(260, els.previewStage.clientWidth || 640);
      const availableHeight = 500;
      return Math.min(1, availableWidth / imageWidth, availableHeight / imageHeight);
    }

    function getPreviewDisplaySize() {
      const width = parseFloat(els.previewCanvas.style.width) || (els.previewCanvas.width / getCanvasDeviceScale()) || 0;
      const height = parseFloat(els.previewCanvas.style.height) || (els.previewCanvas.height / getCanvasDeviceScale()) || 0;
      return { width, height };
    }

    function renderPreview() {
      const hasImage = Boolean(state.sourceImage);
      els.analyzeButton.disabled = !hasImage;
      els.emptyPreviewMessage.style.display = hasImage ? "none" : "grid";

      if (!hasImage) {
        els.previewCanvas.width = 0;
        els.previewCanvas.height = 0;
        els.highlightCanvas.width = 0;
        els.highlightCanvas.height = 0;
        els.sampleInfoText.textContent = "目前沒有圖片。";
        return;
      }

      const image = state.sourceImage;
      const baseScale = getPreviewBaseScale(image.width, image.height);
      const displayScale = baseScale * state.settings.zoom;
      const drawWidth = Math.max(1, Math.round(image.width * displayScale));
      const drawHeight = Math.max(1, Math.round(image.height * displayScale));
      const previewDpr = configureDisplayCanvas(els.previewCanvas, drawWidth, drawHeight);
      const highlightDpr = configureDisplayCanvas(els.highlightCanvas, drawWidth, drawHeight);

      els.previewStage.style.width = `${drawWidth}px`;
      els.previewStage.style.height = `${drawHeight}px`;

      els.previewCtx.setTransform(1, 0, 0, 1, 0, 0);
      els.previewCtx.clearRect(0, 0, els.previewCanvas.width, els.previewCanvas.height);
      els.previewCtx.setTransform(previewDpr, 0, 0, previewDpr, 0, 0);
      els.previewCtx.imageSmoothingEnabled = false;
      els.previewCtx.drawImage(image, 0, 0, drawWidth, drawHeight);
      els.highlightCtx.setTransform(1, 0, 0, 1, 0, 0);
      els.highlightCtx.clearRect(0, 0, els.highlightCanvas.width, els.highlightCanvas.height);
      els.highlightCtx.setTransform(highlightDpr, 0, 0, highlightDpr, 0, 0);

      els.sampleInfoText.textContent = `${state.imageName || "未命名圖片"} / 原始尺寸 ${image.width} × ${image.height}`;
      renderHighlightOverlay();
    }

    function renderHighlightOverlay() {
      const ctx = els.highlightCtx;
      const canvas = els.highlightCanvas;
      const { width: displayWidth, height: displayHeight } = getPreviewDisplaySize();
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      if (state.analysis && state.activeResultKey) {
        const displayItem = getDisplayedResults().find((item) => item.key === state.activeResultKey);
        if (displayItem) {
          const clusterIndexes = new Set(
            displayItem.sources
              .map((sourceKey) => state.analysis.rawResults.findIndex((item) => item.key === sourceKey))
              .filter((index) => index >= 0)
          );
          if (clusterIndexes.size) {
            const maskCanvas = document.createElement("canvas");
            maskCanvas.width = state.analysis.sampleWidth;
            maskCanvas.height = state.analysis.sampleHeight;
            const maskCtx = maskCanvas.getContext("2d");
            const maskImage = maskCtx.createImageData(maskCanvas.width, maskCanvas.height);

            for (let index = 0; index < state.analysis.pixelAssignments.length; index += 1) {
              const clusterIndex = state.analysis.pixelAssignments[index];
              if (!clusterIndexes.has(clusterIndex)) continue;
              const offset = index * 4;
              maskImage.data[offset] = 255;
              maskImage.data[offset + 1] = 255;
              maskImage.data[offset + 2] = 255;
              maskImage.data[offset + 3] = 255;
            }

            maskCtx.putImageData(maskImage, 0, 0);
            ctx.save();
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(maskCanvas, 0, 0, displayWidth, displayHeight);
            ctx.globalCompositeOperation = "source-in";
            ctx.fillStyle = "rgba(255, 127, 96, 0.34)";
            ctx.fillRect(0, 0, displayWidth, displayHeight);
            ctx.restore();
          }
        }
      }

      if (!state.chartRecognition?.grid) {
        return;
      }

      const hoveredCell = getChartCellByKey(state.hoverCellKey);
      const detailCell = state.detail?.type === "cell"
        ? getChartCellByKey(state.detail.key)
        : null;
      const scaleX = displayWidth / state.sourceImage.width;
      const scaleY = displayHeight / state.sourceImage.height;

      const drawCellOutline = (cell, style = {}) => {
        if (!cell) return;
        const x = Math.round(cell.bounds.x0 * scaleX);
        const y = Math.round(cell.bounds.y0 * scaleY);
        const w = Math.max(1, Math.round(cell.bounds.width * scaleX));
        const h = Math.max(1, Math.round(cell.bounds.height * scaleY));
        ctx.save();
        if (style.fill) {
          ctx.fillStyle = style.fill;
          ctx.fillRect(x, y, w, h);
        }
        ctx.strokeStyle = style.stroke || "rgba(232, 156, 169, 0.95)";
        ctx.lineWidth = style.lineWidth || 2;
        if (style.dashed) ctx.setLineDash([6, 4]);
        ctx.strokeRect(x + 0.5, y + 0.5, Math.max(1, w - 1), Math.max(1, h - 1));
        ctx.restore();
      };

      drawCellOutline(hoveredCell, {
        stroke: "rgba(232, 156, 169, 0.92)",
        fill: "rgba(232, 156, 169, 0.08)",
        dashed: true,
        lineWidth: 2
      });
      drawCellOutline(detailCell, {
        stroke: "rgba(73, 76, 70, 0.92)",
        fill: "rgba(232, 156, 169, 0.14)",
        lineWidth: 2.6
      });
    }

    function simulateTomodachiPaletteColor(hue, xNorm, yNorm) {
      // 依據《朋友收集》截圖做的近似模擬：
      // X 軸由灰白走向該色相，Y 軸由亮到暗；左上接近白，左下接近黑灰，右上是亮色，右下是深色。
      const saturation = clamp(xNorm ** 0.95, 0, 1);
      const brightness = clamp(1 - yNorm, 0, 1);
      const grayValue = Math.round(brightness * 255);
      const grayRgb = { r: grayValue, g: grayValue, b: grayValue };
      const hueRgb = hsvToRgb(hue, 0.18 + saturation * 0.82, 0.12 + brightness * 0.88);
      return {
        r: Math.round(grayRgb.r * (1 - saturation) + hueRgb.r * saturation),
        g: Math.round(grayRgb.g * (1 - saturation) + hueRgb.g * saturation),
        b: Math.round(grayRgb.b * (1 - saturation) + hueRgb.b * saturation)
      };
    }

    function getMarkerOffset(primaryX, primaryY, secondaryX, secondaryY) {
      const distance = Math.hypot(primaryX - secondaryX, primaryY - secondaryY);
      return distance < 30 ? { x: 22, y: -18 } : { x: 0, y: 0 };
    }

    function drawPaletteMarker(ctx, x, y, colorHex, options = {}) {
      const radius = options.radius || 18;
      ctx.save();
      ctx.strokeStyle = options.outerStroke || "rgba(255,255,255,0.98)";
      ctx.lineWidth = options.outerWidth || 4;
      if (options.dashed) ctx.setLineDash([6, 5]);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeStyle = options.innerStroke || "rgba(47,49,45,0.92)";
      ctx.lineWidth = options.innerWidth || 2.5;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = colorHex;
      ctx.beginPath();
      ctx.arc(x, y, options.centerRadius || 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawHueMarker(ctx, x, y, width, height, colorHex, options = {}) {
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.94)";
      ctx.strokeStyle = options.stroke || "rgba(47,49,45,0.92)";
      ctx.lineWidth = 2;
      if (options.dashed) ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(x + 10, y);
      ctx.lineTo(x + width - 10, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + 10);
      ctx.lineTo(x + width, y + height - 10);
      ctx.quadraticCurveTo(x + width, y + height, x + width - 10, y + height);
      ctx.lineTo(x + 10, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - 10);
      ctx.lineTo(x, y + 10);
      ctx.quadraticCurveTo(x, y, x + 10, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = colorHex;
      ctx.beginPath();
      ctx.arc(x + (width / 2), y + (height / 2), Math.min(7, width / 3), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function renderTomodachiLegend(container, focus) {
      if (!container || !focus) return;
      const items = [
        {
          kind: "primary",
          label: focus.primaryLabel,
          hex: focus.primaryHex,
          map: focus.primaryMap
        }
      ];

      if (focus.secondaryMap) {
        items.push({
          kind: "secondary",
          label: focus.secondaryLabel,
          hex: focus.secondaryHex,
          map: focus.secondaryMap
        });
      }

      container.innerHTML = items.map((item) => `
        <div class="simulator-legend-item">
          <div class="simulator-legend-head">
            <span class="legend-dot ${item.kind === "secondary" ? "secondary" : ""}" style="background:${item.hex}"></span>
            <strong>${item.label}</strong>
          </div>
          <div class="tiny mono">${item.hex}</div>
          <div class="tiny">底部 ${item.map.hueSliderX}% / 上方 X ${item.map.paletteX}% / Y ${item.map.paletteY}%</div>
        </div>
      `).join("");
    }

    function renderTomodachiCanvasSet(paletteCanvas, hueCanvas, focus, options = {}) {
      if (!paletteCanvas || !hueCanvas || !focus) return;

      const primaryRgb = normalizeColorInput(focus.primaryRgb);
      const primaryHsv = rgbToHsv(primaryRgb);
      const primaryMap = focus.primaryMap;
      const secondaryMap = focus.secondaryMap;

      const paletteCtx = paletteCanvas.getContext("2d");
      const paletteWidth = paletteCanvas.width;
      const paletteHeight = paletteCanvas.height;
      const imageData = paletteCtx.createImageData(paletteWidth, paletteHeight);

      for (let y = 0; y < paletteHeight; y += 1) {
        for (let x = 0; x < paletteWidth; x += 1) {
          const xNorm = x / (paletteWidth - 1);
          const yNorm = y / (paletteHeight - 1);
          const sim = simulateTomodachiPaletteColor(primaryHsv.h, xNorm, yNorm);
          const offset = (y * paletteWidth + x) * 4;
          imageData.data[offset] = sim.r;
          imageData.data[offset + 1] = sim.g;
          imageData.data[offset + 2] = sim.b;
          imageData.data[offset + 3] = 255;
        }
      }
      paletteCtx.putImageData(imageData, 0, 0);

      const primaryPaletteX = (primaryMap.paletteX / 100) * paletteWidth;
      const primaryPaletteY = (primaryMap.paletteY / 100) * paletteHeight;
      drawPaletteMarker(paletteCtx, primaryPaletteX, primaryPaletteY, focus.primaryHex, {
        radius: options.compact ? 15 : 18
      });

      if (secondaryMap) {
        const secondaryPaletteX = (secondaryMap.paletteX / 100) * paletteWidth;
        const secondaryPaletteY = (secondaryMap.paletteY / 100) * paletteHeight;
        const offset = getMarkerOffset(primaryPaletteX, primaryPaletteY, secondaryPaletteX, secondaryPaletteY);
        const adjustedSecondaryX = clamp(secondaryPaletteX + offset.x, 16, paletteWidth - 16);
        const adjustedSecondaryY = clamp(secondaryPaletteY + offset.y, 16, paletteHeight - 16);
        drawPaletteMarker(
          paletteCtx,
          adjustedSecondaryX,
          adjustedSecondaryY,
          focus.secondaryHex,
          {
            radius: options.compact ? 12 : 14,
            outerStroke: "rgba(255,255,255,0.96)",
            innerStroke: "rgba(51,124,115,0.95)",
            dashed: true,
            centerRadius: options.compact ? 4 : 5
          }
        );
      }

      const hueCtx = hueCanvas.getContext("2d");
      const hueWidth = hueCanvas.width;
      const hueHeight = hueCanvas.height;
      for (let x = 0; x < hueWidth; x += 1) {
        const gameHuePercent = x / (hueWidth - 1);
        const actualHue = (360 - (gameHuePercent * 360)) % 360;
        const color = hsvToRgb(actualHue, 1, 1);
        hueCtx.fillStyle = rgbToHex(color);
        hueCtx.fillRect(x, 0, 1, hueHeight);
      }

      const hueMarkerWidth = options.compact ? 18 : 20;
      const hueMarkerHeight = hueHeight - 16;
      const primaryHueX = (primaryMap.hueSliderX / 100) * hueWidth;
      drawHueMarker(
        hueCtx,
        primaryHueX - (hueMarkerWidth / 2),
        8,
        hueMarkerWidth,
        hueMarkerHeight,
        focus.primaryHex
      );

      if (secondaryMap) {
        const secondaryHueX = (secondaryMap.hueSliderX / 100) * hueWidth;
        const hueOffset = Math.abs(primaryHueX - secondaryHueX) < 24 ? 18 : 0;
        drawHueMarker(
          hueCtx,
          secondaryHueX - (hueMarkerWidth / 2),
          8 + hueOffset,
          hueMarkerWidth,
          Math.max(20, hueMarkerHeight - hueOffset),
          focus.secondaryHex,
          {
            stroke: "rgba(51,124,115,0.95)",
            dashed: true
          }
        );
      }
    }

    function renderTomodachiGuide(targetTitle, targetText, focus) {
      if (!targetTitle || !targetText || !focus) return;
      targetTitle.textContent = focus.sourceLabel;
      const detailText = `${describeTomodachiPalettePosition(focus.primaryRgb)} ${focus.note || ""}`;
      targetText.textContent = detailText.trim();
    }

    function renderTabs() {
      els.tabButtons.forEach((button) => {
        const isActive = button.dataset.tab === state.activeTab;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      els.analyzeTabPanel.classList.toggle("is-active", state.activeTab === "analyze");
      els.paletteTabPanel.classList.toggle("is-active", state.activeTab === "palette");
    }

    function setActiveTab(tab) {
      state.activeTab = tab === "palette" ? "palette" : "analyze";
      saveState();
    }

    function renderTomodachiSimulator() {
      const focus = ensureSimulatorFocus();
      renderTomodachiCanvasSet(els.tomodachiPaletteCanvas, els.tomodachiHueCanvas, focus);
      renderTomodachiLegend(els.tomodachiLegend, focus);
      renderTomodachiGuide(els.tomodachiGuideTitle, els.tomodachiGuideText, focus);
      renderTomodachiCanvasSet(els.paletteTomodachiPaletteCanvas, els.paletteTomodachiHueCanvas, focus);
      renderTomodachiLegend(els.paletteTomodachiLegend, focus);
      renderTomodachiGuide(els.paletteTomodachiGuideTitle, els.paletteTomodachiGuideText, focus);
    }

    function buildDetailCandidateList(candidates) {
      return `
        <div class="candidate-list">
          ${candidates.map((candidate, index) => `
            <div class="candidate-row">
              <span class="rank">${index + 1}</span>
              <span class="swatch small" style="background:${candidate.hex}"></span>
              <span class="text">
                <strong>${candidate.id} ${candidate.hex}</strong>
                <span>RGB ${formatRgb(candidate.rgb)} / ${formatDistance(candidate.distance)}</span>
              </span>
              <button type="button" class="mini-btn" data-action="open-palette" data-id="${candidate.id}">查看色卡</button>
              <button type="button" class="mini-btn" data-action="copy-hex" data-hex="${candidate.hex}">複製</button>
            </div>
          `).join("")}
        </div>
      `;
    }

    function buildPixelSimulatorSection(item) {
      return `
        <div class="detail-simulator">
          <div class="canvas-label">
            <span>像素取樣的朋友收集色盤對照</span>
            <span class="tiny">主視圖目前會跟著下方「主模擬」按鈕切換</span>
          </div>
          <canvas id="detailTomodachiPaletteCanvas" class="palette-canvas" width="560" height="315" aria-label="像素詳情朋友收集上方大色盤"></canvas>
          <canvas id="detailTomodachiHueCanvas" class="hue-canvas" width="560" height="70" aria-label="像素詳情朋友收集底部色相條"></canvas>
          <div id="detailTomodachiLegend" class="simulator-legend"></div>
          <div class="toggle-action-row">
            <button type="button" class="mini-btn ${item.displayMode === "raw" ? "is-active" : ""}" data-action="set-pixel-focus-mode" data-mode="raw">主模擬看實際抓色</button>
            <button type="button" class="mini-btn ${item.displayMode === "matched" ? "is-active" : ""}" data-action="set-pixel-focus-mode" data-mode="matched">主模擬看建議拼豆</button>
          </div>
        </div>
      `;
    }

    function buildSingleColorSimulatorSection(prefix, title) {
      return `
        <div class="detail-simulator">
          <div class="canvas-label">
            <span>${title}</span>
          </div>
          <canvas id="${prefix}TomodachiPaletteCanvas" class="palette-canvas" width="560" height="315" aria-label="${title}上方大色盤"></canvas>
          <canvas id="${prefix}TomodachiHueCanvas" class="hue-canvas" width="560" height="70" aria-label="${title}底部色相條"></canvas>
          <div id="${prefix}TomodachiLegend" class="simulator-legend"></div>
        </div>
      `;
    }

    function renderSingleColorDetailSimulator(prefix, descriptor, sourceLabel) {
      const paletteCanvas = document.getElementById(`${prefix}TomodachiPaletteCanvas`);
      const hueCanvas = document.getElementById(`${prefix}TomodachiHueCanvas`);
      const legend = document.getElementById(`${prefix}TomodachiLegend`);
      if (!paletteCanvas || !hueCanvas || !legend) return;

      const focus = createSimulatorFocus({
        sourceType: "detail",
        sourceLabel,
        primary: descriptor
      });

      renderTomodachiCanvasSet(paletteCanvas, hueCanvas, focus, { compact: true });
      renderTomodachiLegend(legend, focus);
    }

    function renderPixelDetailSimulator(item) {
      const paletteCanvas = document.getElementById("detailTomodachiPaletteCanvas");
      const hueCanvas = document.getElementById("detailTomodachiHueCanvas");
      const legend = document.getElementById("detailTomodachiLegend");
      if (!paletteCanvas || !hueCanvas || !legend) return;

      const rawDescriptor = createSimulatorColorDescriptor(item.rgb, {
        label: `實際抓色 ${item.hex}`,
        hex: item.hex
      });
      const matchedDescriptor = createSimulatorColorDescriptor(item.matchedColor.rgb, {
        id: item.matchedColor.id,
        label: `建議拼豆 ${item.matchedColor.id}`,
        hex: item.matchedColor.hex
      });

      const focus = item.displayMode === "matched"
        ? createSimulatorFocus({
            sourceType: "pixel",
            sourceLabel: `目前定位：建議拼豆 ${item.matchedColor.id}`,
            mode: "dual",
            primary: matchedDescriptor,
            secondary: rawDescriptor,
            note: `像素 (${item.x}, ${item.y}) 的雙定位對照`
          })
        : createSimulatorFocus({
            sourceType: "pixel",
            sourceLabel: `目前定位：像素抓色 ${item.hex}`,
            mode: "dual",
            primary: rawDescriptor,
            secondary: matchedDescriptor,
            note: `像素 (${item.x}, ${item.y}) 的雙定位對照`
          });

      renderTomodachiCanvasSet(paletteCanvas, hueCanvas, focus, { compact: true });
      renderTomodachiLegend(legend, focus);
    }

    function renderDetailDrawer() {
      const detail = state.detail;
      const isOpen = Boolean(detail) && state.activeView !== "palette";
      els.detailOverlay.classList.toggle("is-open", isOpen);
      els.detailDrawer.classList.toggle("is-open", isOpen);
      els.detailDrawer.setAttribute("aria-hidden", String(!isOpen));

      if (!detail || !isOpen) {
        els.drawerTitle.textContent = "顏色詳情";
        els.drawerSubtitle.textContent = "點一下結果卡或色卡即可查看完整資訊。";
        els.drawerContent.innerHTML = `<div class="empty-state">目前尚未選擇顏色。</div>`;
        return;
      }

      if (detail.type === "palette") {
        const item = paletteById[detail.id];
        const hsl = rgbToHsl(item.rgb);
        const hsv = rgbToHsv(item.rgb);
        const mapped = mapColorToTomodachiPalette(item.rgb);
        els.drawerTitle.textContent = `色票詳情：${item.id}`;
        els.drawerSubtitle.textContent = "內建拼豆色卡";
        els.drawerContent.innerHTML = `
          <div class="big-swatch" style="background:${item.hex}"></div>
          <div class="detail-grid">
            <div class="detail-item"><strong>拼豆色號</strong><span>${item.id}</span></div>
            <div class="detail-item"><strong>顏色名稱</strong><span>${item.name}</span></div>
            <div class="detail-item"><strong>HEX</strong><span class="mono">${item.hex}</span></div>
            <div class="detail-item"><strong>RGB</strong><span>${formatRgb(item.rgb)}</span></div>
            <div class="detail-item"><strong>HSV</strong><span>H ${hsv.h} / S ${hsv.s}% / V ${hsv.v}%</span></div>
            <div class="detail-item"><strong>HSL</strong><span>H ${hsl.h} / S ${hsl.s}% / L ${hsl.l}%</span></div>
          </div>
          <div class="helper-box">${describeHexPosition(item.rgb)}</div>
          <div class="guide-box">
            <strong>朋友收集色盤定位</strong>
            <span>底部色相條：${mapped.hueSliderX}% / 上方色盤 X：${mapped.paletteX}% / Y：${mapped.paletteY}%</span>
            <span>${describeTomodachiPalettePosition(item.rgb)}</span>
          </div>
          ${buildSingleColorSimulatorSection("paletteDetail", "這個拼豆色在朋友收集色盤的位置")}
          <div class="result-actions">
            <button type="button" class="secondary-btn" data-action="copy-hex" data-hex="${item.hex}">複製 HEX</button>
          </div>
        `;
        renderSingleColorDetailSimulator(
          "paletteDetail",
          createSimulatorColorDescriptor(item.rgb, {
            id: item.id,
            label: `${item.id} ${item.hex}`,
            hex: item.hex
          }),
          `目前定位：${item.id}`
        );
      }

      if (detail.type === "result") {
        const item = detail.item;
        const matchedColor = paletteById[item.matchedId];
        const rawRgb = normalizeColorInput(item.rawRgb);
        const hsl = rgbToHsl(matchedColor.rgb);
        const hsv = rgbToHsv(matchedColor.rgb);
        const mapped = mapColorToTomodachiPalette(matchedColor.rgb);
        els.drawerTitle.textContent = `分析結果：${item.matchedId}`;
        els.drawerSubtitle.textContent = item.displayType === "match"
          ? `已合併 ${item.sourceCount} 組原始顏色`
          : "單一原始抓色";
        els.drawerContent.innerHTML = `
          <div class="big-swatch" style="background:${matchedColor.hex}"></div>
          <div class="detail-grid">
            <div class="detail-item"><strong>拼豆色號</strong><span>${matchedColor.id}</span></div>
            <div class="detail-item"><strong>對應 HEX</strong><span class="mono">${matchedColor.hex}</span></div>
            <div class="detail-item"><strong>RGB</strong><span>${formatRgb(matchedColor.rgb)}</span></div>
            <div class="detail-item"><strong>實際抓到的顏色 HEX</strong><span class="mono">${item.rawHex}</span></div>
            <div class="detail-item"><strong>實際抓到的 RGB</strong><span>${formatRgb(rawRgb)}</span></div>
            <div class="detail-item"><strong>色差值</strong><span>${formatDistance(item.distance)}</span></div>
            <div class="detail-item"><strong>使用比例</strong><span>${formatRatio(item.ratio)}</span></div>
            <div class="detail-item"><strong>使用像素數</strong><span>${item.count.toLocaleString()}</span></div>
            <div class="detail-item"><strong>HSV</strong><span>H ${hsv.h} / S ${hsv.s}% / V ${hsv.v}%</span></div>
            <div class="detail-item"><strong>HSL</strong><span>H ${hsl.h} / S ${hsl.s}% / L ${hsl.l}%</span></div>
          </div>
          <div class="helper-box">${describeHexPosition(matchedColor.rgb)}</div>
          <div class="guide-box">
            <strong>朋友收集色盤定位</strong>
            <span>底部色相條：${mapped.hueSliderX}% / 上方色盤 X：${mapped.paletteX}% / Y：${mapped.paletteY}%</span>
            <span>${describeTomodachiPalettePosition(matchedColor.rgb)}</span>
          </div>
          <div>
            <strong style="display:block; margin-bottom:10px;">前 3 名最接近候選色</strong>
            ${buildDetailCandidateList(item.topCandidates)}
          </div>
          <div class="field-row">
            <label for="manualOverrideInput">手動修正匹配結果</label>
            <input id="manualOverrideInput" class="text-input" type="text" list="paletteIdOptions" value="${item.matchedId}" placeholder="輸入拼豆色號，例如 D13">
            <small>若目前是合併模式，會把這張結果卡所包含的原始群色一起改成你指定的拼豆色號。</small>
          </div>
          <div class="result-actions">
            <button type="button" class="secondary-btn" data-action="apply-manual-override">套用手動指定</button>
            <button type="button" class="ghost-btn" data-action="clear-manual-override">清除手動指定</button>
            <button type="button" class="ghost-btn" data-action="highlight-result" data-key="${item.key}">高亮相近像素</button>
            <button type="button" class="secondary-btn" data-action="copy-hex" data-hex="${matchedColor.hex}">複製 HEX</button>
          </div>
        `;
      }

      if (detail.type === "pixel") {
        const item = enrichPixelDetailItem(detail.item);
        detail.item = item;
        const matchedColor = item.matchedColor;
        const hsl = rgbToHsl(item.rgb);
        const hsv = rgbToHsv(item.rgb);
        const rawMapped = item.rawMap;
        const matchedMapped = item.matchedMap;
        els.drawerTitle.textContent = "像素取樣詳情";
        els.drawerSubtitle.textContent = `座標 (${item.x}, ${item.y})`;
        els.drawerContent.innerHTML = `
          <div class="big-swatch" style="background:${item.hex}"></div>
          <div class="detail-grid">
            <div class="detail-item"><strong>實際抓色 HEX</strong><span class="mono">${item.hex}</span></div>
            <div class="detail-item"><strong>實際抓色 RGB</strong><span>${formatRgb(item.rgb)}</span></div>
            <div class="detail-item"><strong>建議拼豆色號</strong><span>${matchedColor.id}</span></div>
            <div class="detail-item"><strong>建議拼豆 HEX</strong><span class="mono">${matchedColor.hex}</span></div>
            <div class="detail-item"><strong>HSV</strong><span>H ${hsv.h} / S ${hsv.s}% / V ${hsv.v}%</span></div>
            <div class="detail-item"><strong>HSL</strong><span>H ${hsl.h} / S ${hsl.s}% / L ${hsl.l}%</span></div>
          </div>
          <div class="helper-box">${describeHexPosition(item.rgb)}</div>
          <div class="guide-box">
            <strong>實際抓色的朋友收集定位</strong>
            <span>底部色相條：${rawMapped.hueSliderX}% / 上方色盤 X：${rawMapped.paletteX}% / Y：${rawMapped.paletteY}%</span>
            <span>${describeTomodachiPalettePosition(item.rgb)}</span>
          </div>
          <div class="guide-box">
            <strong>建議拼豆色的朋友收集定位</strong>
            <span>底部色相條：${matchedMapped.hueSliderX}% / 上方色盤 X：${matchedMapped.paletteX}% / Y：${matchedMapped.paletteY}%</span>
            <span>${describeTomodachiPalettePosition(matchedColor.rgb)}</span>
          </div>
          ${buildPixelSimulatorSection(item)}
          <div>
            <strong style="display:block; margin-bottom:10px;">前 3 名最接近候選色</strong>
            ${buildDetailCandidateList(item.topCandidates)}
          </div>
        `;
        renderPixelDetailSimulator(item);
      }

      if (detail.type === "cell") {
        const cell = getChartCellByKey(detail.key);
        if (!cell) {
          els.drawerTitle.textContent = "格子詳情";
          els.drawerSubtitle.textContent = "找不到這個格子。";
          els.drawerContent.innerHTML = `<div class="empty-state">這格可能已經不存在，請重新分析圖片。</div>`;
          return;
        }

        const resolved = getResolvedCellAssignment(cell);
        const sample = getCellRepresentativeInfo(cell);
        const matchedPalette = resolved?.palette || (sample?.nearest ? paletteById[sample.nearest.id] : null);
        const sourceLabel = resolved?.source === "ocr"
          ? "OCR"
          : resolved?.source === "manual"
            ? "手動指定"
            : resolved?.source === "color-fallback"
              ? "顏色回退"
              : "未決定";
        const mapped = matchedPalette ? mapColorToTomodachiPalette(matchedPalette.rgb) : null;
        els.drawerTitle.textContent = `格子詳情：${cell.key}`;
        els.drawerSubtitle.textContent = `第 ${cell.row} 列 / 第 ${cell.col} 欄`;
        els.drawerContent.innerHTML = `
          <div class="big-swatch" style="background:${matchedPalette?.hex || sample?.hex || "#ffffff"}"></div>
          <div class="detail-grid">
            <div class="detail-item"><strong>目前採用色號</strong><span>${resolved?.id || "未決定"}</span></div>
            <div class="detail-item"><strong>來源</strong><span>${sourceLabel}</span></div>
            <div class="detail-item"><strong>OCR 原始文字</strong><span>${cell.rawText ? escapeHtml(cell.rawText) : "未辨識到文字"}</span></div>
            <div class="detail-item"><strong>OCR 信心</strong><span>${cell.confidence ? `${round(cell.confidence, 1)}%` : "—"}</span></div>
            <div class="detail-item"><strong>代表色 HEX</strong><span class="mono">${sample?.hex || "—"}</span></div>
            <div class="detail-item"><strong>代表色 RGB</strong><span>${sample ? formatRgb(sample.rgb) : "—"}</span></div>
            <div class="detail-item"><strong>對應拼豆 HEX</strong><span class="mono">${matchedPalette?.hex || "—"}</span></div>
            <div class="detail-item"><strong>對應拼豆 RGB</strong><span>${matchedPalette ? formatRgb(matchedPalette.rgb) : "—"}</span></div>
          </div>
          <div class="helper-box">${sample ? describeHexPosition(sample.rgb) : "這格目前沒有足夠的顏色資訊。"}</div>
          ${mapped ? `
            <div class="guide-box">
              <strong>朋友收集色盤定位</strong>
              <span>底部色相條：${mapped.hueSliderX}% / 上方色盤 X：${mapped.paletteX}% / Y：${mapped.paletteY}%</span>
              <span>${describeTomodachiPalettePosition(matchedPalette.rgb)}</span>
            </div>
          ` : ""}
          <div class="field-row">
            <label for="cellManualOverrideInput">手動指定這一格的色號</label>
            <input id="cellManualOverrideInput" class="text-input" type="text" list="paletteIdOptions" value="${resolved?.id || ""}" placeholder="輸入拼豆色號，例如 A1">
            <small>如果 OCR 看錯，或這格沒有文字，你可以直接在這裡改成正確的拼豆色號。</small>
          </div>
          <div class="result-actions">
            <button type="button" class="secondary-btn" data-action="apply-cell-manual-override">套用手動指定</button>
            <button type="button" class="ghost-btn" data-action="clear-cell-manual-override">清除手動指定</button>
            ${matchedPalette ? `<button type="button" class="ghost-btn" data-action="open-palette" data-id="${matchedPalette.id}">查看色卡</button>` : ""}
            ${matchedPalette ? `<button type="button" class="secondary-btn" data-action="copy-hex" data-hex="${matchedPalette.hex}">複製 HEX</button>` : ""}
          </div>
          ${sample?.topCandidates?.length ? `
            <div>
              <strong style="display:block; margin-bottom:10px;">這格代表色的前 3 名候選色</strong>
              ${buildDetailCandidateList(sample.topCandidates)}
            </div>
          ` : ""}
        `;
      }

    }

    function openPaletteDetail(id) {
      if (!paletteById[id]) return;
      state.detail = { type: "palette", id };
      state.activeResultKey = null;
      setSimulatorFocus(buildSimulatorFocusFromPalette(paletteById[id]));
      setRecentView(id);
      renderAll();
    }

    function openResultDetail(key) {
      const item = getDisplayedResults().find((result) => result.key === key);
      if (!item) return;
      state.detail = { type: "result", item };
      setSimulatorFocus(buildSimulatorFocusFromResult(item));
      setRecentView(item.matchedId);
      renderAll();
    }

    function openPixelDetail(pixelInfo) {
      const enriched = enrichPixelDetailItem(pixelInfo);
      state.detail = { type: "pixel", item: enriched };
      setSimulatorFocus(buildSimulatorFocusFromPixel(enriched, enriched.displayMode));
      setRecentView(enriched.matchedColor.id);
      renderAll();
    }

    function closeDetailDrawer() {
      state.detail = null;
      renderAll();
    }

    function applyManualOverride() {
      if (state.detail?.type !== "result") return;
      const input = document.getElementById("manualOverrideInput");
      if (!input) return;
      const paletteId = input.value.trim().toUpperCase();
      if (!paletteId) {
        showToast("請先輸入拼豆色號");
        return;
      }
      if (!paletteById[paletteId]) {
        showToast("找不到這個拼豆色號");
        return;
      }

      state.detail.item.sources.forEach((sourceKey) => {
        state.manualOverrides[sourceKey] = paletteId;
      });
      saveState();
      const refreshed = getResultBySourceKey(state.detail.item.sources[0]);
      if (refreshed) {
        state.detail = { type: "result", item: refreshed };
        setSimulatorFocus(buildSimulatorFocusFromResult(refreshed));
      }
      setRecentView(paletteId);
      renderAll();
      showToast(`已指定成 ${paletteId}`);
    }

    function clearManualOverride() {
      if (state.detail?.type !== "result") return;
      state.detail.item.sources.forEach((sourceKey) => {
        delete state.manualOverrides[sourceKey];
      });
      saveState();
      const refreshed = getResultBySourceKey(state.detail.item.sources[0]);
      if (refreshed) {
        state.detail = { type: "result", item: refreshed };
        setSimulatorFocus(buildSimulatorFocusFromResult(refreshed));
      }
      renderAll();
      showToast("已清除手動指定");
    }

    function escapeHtml(text) {
      return String(text ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function getChartCellByKey(cellKey) {
      if (!cellKey || !state.chartRecognition?.cells) return null;
      return state.chartRecognition.cells.find((cell) => cell.key === cellKey) || null;
    }

    function getCellFromImagePoint(x, y) {
      if (!state.chartRecognition?.grid) return null;
      const { grid } = state.chartRecognition;
      if (x < grid.left || x > grid.right || y < grid.top || y > grid.bottom) return null;
      const col = locateIndexInLines(x, grid.columnLines);
      const row = locateIndexInLines(y, grid.rowLines);
      if (row === -1 || col === -1) return null;
      return getChartCellByKey(getCellKey(row, col));
    }

    function getCellRepresentativeInfo(cell) {
      if (!cell || !state.sourceCanvas) return null;
      const rgb = sampleCellRepresentativeColor(cell, state.sourceCanvas);
      const topCandidates = findTopNearestPaletteColors(rgb, 3, state.settings.distanceMethod);
      return {
        rgb: [rgb.r, rgb.g, rgb.b],
        hex: rgbToHex(rgb),
        topCandidates,
        nearest: topCandidates[0] || null
      };
    }

    function openCellDetail(cellKey) {
      const cell = getChartCellByKey(cellKey);
      if (!cell) return;
      state.detail = { type: "cell", key: cell.key };
      const resolved = getResolvedCellAssignment(cell);
      if (resolved?.palette) {
        setSimulatorFocus(buildSimulatorFocusFromPalette(resolved.palette));
        setRecentView(resolved.palette.id);
      }
      renderAll();
    }

    function applyCellManualOverride() {
      if (state.detail?.type !== "cell") return;
      const cell = getChartCellByKey(state.detail.key);
      const input = document.getElementById("cellManualOverrideInput");
      if (!cell || !input) return;
      const paletteId = input.value.trim().toUpperCase();
      if (!paletteId) {
        showToast("請先輸入拼豆色號");
        return;
      }
      if (!paletteById[paletteId]) {
        showToast("找不到這個拼豆色號");
        return;
      }
      state.chartManualOverrides[cell.key] = paletteId;
      refreshChartRecognitionDerivedData();
      saveState();
      setSimulatorFocus(buildSimulatorFocusFromPalette(paletteById[paletteId]));
      setRecentView(paletteId);
      renderAll();
      showToast(`已把 ${cell.key} 指定成 ${paletteId}`);
    }

    function clearCellManualOverride() {
      if (state.detail?.type !== "cell") return;
      const cell = getChartCellByKey(state.detail.key);
      if (!cell) return;
      delete state.chartManualOverrides[cell.key];
      refreshChartRecognitionDerivedData();
      saveState();
      renderAll();
      showToast(`已清除 ${cell.key} 的手動指定`);
    }

    function getImagePixelFromPointer(event) {
      if (!state.sourceImage) return null;
      const rect = els.previewCanvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return null;

      const x = clamp(Math.floor(((event.clientX - rect.left) / rect.width) * state.sourceImage.width), 0, state.sourceImage.width - 1);
      const y = clamp(Math.floor(((event.clientY - rect.top) / rect.height) * state.sourceImage.height), 0, state.sourceImage.height - 1);
      const sourceCtx = state.sourceCanvas.getContext("2d");
      const data = sourceCtx.getImageData(x, y, 1, 1).data;
      const rgb = [data[0], data[1], data[2]];

      return {
        x,
        y,
        rgb,
        hex: rgbToHex(rgb)
      };
    }

    function handlePreviewHover(event) {
      if (state.previewInteractionMode === "cell") {
        const pixel = getImagePixelFromPointer(event);
        state.hoverPixel = null;
        state.hoverCellKey = pixel ? getCellFromImagePoint(pixel.x, pixel.y)?.key || null : null;
        renderHoverInspector();
        renderHighlightOverlay();
        return;
      }

      const pixel = getImagePixelFromPointer(event);
      state.hoverCellKey = null;
      state.hoverPixel = pixel;
      renderHoverInspector();
      renderHighlightOverlay();
    }

    function handlePreviewLeave() {
      state.hoverPixel = null;
      state.hoverCellKey = null;
      renderHoverInspector();
      renderHighlightOverlay();
    }

    function handlePreviewClick(event) {
      if (state.previewInteractionMode === "cell") {
        const pixel = getImagePixelFromPointer(event);
        if (!pixel) return;
        const cell = getCellFromImagePoint(pixel.x, pixel.y);
        if (!cell) return;
        openCellDetail(cell.key);
        renderClickInspector();
        renderHighlightOverlay();
        return;
      }

      const pixel = getImagePixelFromPointer(event);
      if (!pixel) return;
      const topCandidates = findTopNearestPaletteColors(pixel.rgb, 3, state.settings.distanceMethod);
      state.clickedPixel = { ...pixel, topCandidates };
      renderClickInspector();
      openPixelDetail(state.clickedPixel);
    }

    function loadImageFromSource(src, imageName = "", options = {}) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        const revokeSrc = options.revokeSrc === true;
        image.onload = () => {
          state.sourceImage = image;
          state.imageName = imageName;
          state.sourceCanvas.width = image.width;
          state.sourceCanvas.height = image.height;
          const sourceCtx = state.sourceCanvas.getContext("2d");
          sourceCtx.setTransform(1, 0, 0, 1, 0, 0);
          sourceCtx.clearRect(0, 0, state.sourceCanvas.width, state.sourceCanvas.height);
          sourceCtx.drawImage(image, 0, 0);
          if (revokeSrc) {
            URL.revokeObjectURL(src);
          }
          resolve(image);
        };
        image.onerror = (error) => {
          if (revokeSrc) {
            URL.revokeObjectURL(src);
          }
          reject(error);
        };
        image.src = src;
      });
    }

    function loadImageFromDataUrl(dataUrl, imageName = "") {
      state.imageDataUrl = dataUrl;
      return loadImageFromSource(dataUrl, imageName);
    }

    function loadImageFromBlob(blob, imageName = "") {
      const objectUrl = URL.createObjectURL(blob);
      state.imageDataUrl = "";
      return loadImageFromSource(objectUrl, imageName, { revokeSrc: true });
    }

    async function handleImageFile(file) {
      if (!file) return;
      await loadImageFromBlob(file, file.name);
      state.imageStoreKey = "";
      state.imageDataUrl = "";
      const persisted = await saveImageBlobToStore(file, LAST_IMAGE_STORE_KEY);
      let qualityMessage = "";
      if (persisted) {
        state.imageStoreKey = LAST_IMAGE_STORE_KEY;
      } else {
        qualityMessage = "這次圖片會維持當前視窗的原畫質，但瀏覽器儲存空間不足，重新整理後可能不會自動還原。";
      }
      state.clickedPixel = null;
      state.hoverPixel = null;
      state.hoverCellKey = null;
      state.analysis = null;
      state.chartRecognition = null;
      state.manualOverrides = {};
      state.activeResultKey = null;
      state.chartManualOverrides = {};
      state.previewInteractionMode = "pixel";
      state.ocrStatusText = qualityMessage;
      state.isAnalyzing = false;
      state.analysisDurationMs = 0;
      state.detail = null;
      saveState();
      renderAll();
      els.imageStatusText.textContent = persisted
        ? `已載入原始圖片：${file.name}。現在可以按「分析圖片」。`
        : `已載入原始圖片：${file.name}。目前僅保留在這次視窗，重新整理後可能需要重新上傳。`;
    }

    function createSampleCanvasFromSource() {
      const image = state.sourceImage;
      const sampleCanvas = document.createElement("canvas");
      const longestSide = Math.max(image.width, image.height);
      const maxSide = clamp(Math.round(longestSide * 0.42), 480, 960);
      const scale = Math.min(1, maxSide / longestSide);
      sampleCanvas.width = Math.max(1, Math.round(image.width * scale));
      sampleCanvas.height = Math.max(1, Math.round(image.height * scale));
      const ctx = sampleCanvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(image, 0, 0, sampleCanvas.width, sampleCanvas.height);
      return sampleCanvas;
    }

    async function analyzeImage() {
      if (!state.sourceImage) return;
      const runId = state.analysisRunId + 1;
      state.analysisRunId = runId;
      state.isAnalyzing = true;
      state.activeResultKey = null;
      state.clickedPixel = null;
      state.hoverPixel = null;
      state.hoverCellKey = null;
      state.detail = null;
      state.chartRecognition = null;
      state.ocrStatusText = "正在整理圖片顏色與色號...";
      renderAll();

      const sampleCanvas = createSampleCanvasFromSource();
      const sampleCtx = sampleCanvas.getContext("2d");
      const sampleImageData = sampleCtx.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height);
      const settings = getAnalysisSettingsSnapshot();
      const extracted = extractDominantColors(sampleImageData, settings);

      try {
        state.analysis = {
          ...extracted,
          settingsSnapshot: settings
        };
        if (runId !== state.analysisRunId) return;

        let chartRecognition = null;
        try {
          state.ocrStatusText = "正在辨識圖上的格子與色號...";
          renderRecognitionResults();
          chartRecognition = await recognizeChartColorsFromImage();
        } catch (error) {
          console.error("Chart OCR failed:", error);
          state.ocrStatusText = "OCR 辨識失敗，已保留一般顏色分析結果。";
        }

        if (runId !== state.analysisRunId) return;

        state.chartRecognition = chartRecognition;
        if (chartRecognition?.summary?.length) {
          state.previewInteractionMode = "cell";
          state.ocrStatusText = `已辨識 ${chartRecognition.summary.length} 種色號；若某格沒有文字，已自動以顏色回退補上。`;
          const firstId = chartRecognition.summary[0]?.id;
          if (firstId && paletteById[firstId]) {
            setSimulatorFocus(buildSimulatorFocusFromPalette(paletteById[firstId]));
          } else {
            setSimulatorFocus(buildDefaultSimulatorFocus());
          }
        } else {
          state.previewInteractionMode = "pixel";
          state.ocrStatusText = "這張圖沒有建立出穩定的格子 / 色號層，已保留一般顏色分析結果。";
          const results = getDisplayedResults();
          if (results.length) {
            setSimulatorFocus(buildSimulatorFocusFromResult(results[0]));
          } else {
            setSimulatorFocus(buildDefaultSimulatorFocus());
          }
        }

        const results = getDisplayedResults();
        saveState();
        renderAll();
        els.imageStatusText.textContent = chartRecognition?.summary?.length
          ? `分析完成：${state.imageName || "圖片"}。已辨識 ${chartRecognition.summary.length} 種拼豆色號，並整理出 ${results.length} 組顏色結果。`
          : `分析完成：${state.imageName || "圖片"}。共整理出 ${results.length} 組顏色結果。`;
        showToast(chartRecognition?.summary?.length
          ? `分析完成，已辨識 ${chartRecognition.summary.length} 種色號`
          : `分析完成，共整理出 ${results.length} 組顏色結果`);
      } finally {
        if (runId === state.analysisRunId) {
          state.isAnalyzing = false;
          renderAll();
        }
      }
    }

    function buildExportRows() {
      return getDisplayedResults().map((item) => ({
        rawHex: item.rawHex,
        rawRgb: formatRgb(item.rawRgb),
        matchedId: item.matchedId,
        matchedHex: item.matchedHex,
        matchedRgb: formatRgb(item.matchedRgb),
        count: item.count,
        ratio: round(item.ratio, 6),
        distance: round(item.distance, 4),
        top1: item.topCandidates[0] ? `${item.topCandidates[0].id} ${item.topCandidates[0].hex} ${item.topCandidates[0].distance}` : "",
        top2: item.topCandidates[1] ? `${item.topCandidates[1].id} ${item.topCandidates[1].hex} ${item.topCandidates[1].distance}` : "",
        top3: item.topCandidates[2] ? `${item.topCandidates[2].id} ${item.topCandidates[2].hex} ${item.topCandidates[2].distance}` : "",
        manualOverrideId: item.displayType === "raw" ? (item.manualOverrideId || "") : item.sources.map((sourceKey) => state.manualOverrides[sourceKey]).filter(Boolean).join("|")
      }));
    }

    function exportJson() {
      const payload = {
        generatedAt: new Date().toISOString(),
        settings: getAnalysisSettingsSnapshot(),
        results: buildExportRows()
      };
      downloadTextFile("perler-hex-analysis.json", JSON.stringify(payload, null, 2), "application/json");
      showToast("已匯出 JSON");
    }

    function exportCsv() {
      const rows = buildExportRows();
      const headers = Object.keys(rows[0] || {
        rawHex: "",
        rawRgb: "",
        matchedId: "",
        matchedHex: "",
        matchedRgb: "",
        count: "",
        ratio: "",
        distance: "",
        top1: "",
        top2: "",
        top3: "",
        manualOverrideId: ""
      });
      const lines = [
        headers.join(","),
        ...rows.map((row) => headers.map((header) => `"${String(row[header] ?? "").replaceAll('"', '""')}"`).join(","))
      ];
      downloadTextFile("perler-hex-analysis.csv", lines.join("\n"), "text/csv;charset=utf-8");
      showToast("已匯出 CSV");
    }

    function exportSwatches() {
      const rows = getDisplayedResults().map((item, index) => `${index + 1}. ${item.matchedId} ${item.matchedHex} RGB(${formatRgb(item.matchedRgb)}) 使用比例 ${formatRatio(item.ratio)} 色差 ${formatDistance(item.distance)}`);
      const content = [
        "拼豆色票清單",
        `產生時間：${new Date().toLocaleString()}`,
        `設定：${state.settings.mode === "match" ? "自動匹配拼豆色卡" : "僅顯示原始抓色"} / 上限 ${getCurrentColorLimit()} 色 / ${state.settings.distanceMethod === "deltaE" ? "Delta E" : "RGB"} 距離`,
        "",
        ...rows
      ].join("\n");
      downloadTextFile("perler-hex-swatches.txt", content, "text/plain;charset=utf-8");
      showToast("已匯出色票清單");
    }

    function saveState() {
      const payload = {
        settings: state.settings,
        activeTab: state.activeTab,
        paletteSearch: state.paletteSearch,
        recentViews: state.recentViews,
        imageStoreKey: state.imageStoreKey,
        imageName: state.imageName,
        manualOverrides: state.manualOverrides,
        chartManualOverrides: state.chartManualOverrides,
        previewInteractionMode: state.previewInteractionMode
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    }

    async function restoreState() {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      try {
        const saved = JSON.parse(raw);
        state.settings = { ...DEFAULT_SETTINGS, ...(saved.settings || {}) };
        state.activeTab = saved.activeTab === "palette" ? "palette" : "analyze";
        state.paletteSearch = saved.paletteSearch || "";
        state.recentViews = Array.isArray(saved.recentViews) ? saved.recentViews.filter((id) => paletteById[id]) : [];
        state.imageStoreKey = saved.imageStoreKey || "";
        state.manualOverrides = Object.fromEntries(
          Object.entries(saved.manualOverrides || {}).filter(([, paletteId]) => paletteById[paletteId])
        );
        state.chartManualOverrides = Object.fromEntries(
          Object.entries(saved.chartManualOverrides || {}).filter(([, paletteId]) => paletteById[paletteId])
        );
        state.previewInteractionMode = saved.previewInteractionMode === "cell" ? "cell" : "pixel";
        syncSettingsInputs();
        els.paletteSearchInput.value = state.paletteSearch;
        const storedBlob = state.imageStoreKey
          ? await loadImageBlobFromStore(state.imageStoreKey)
          : null;

        if (storedBlob) {
          await loadImageFromBlob(storedBlob, saved.imageName || "最近分析圖片");
          els.imageStatusText.textContent = `已還原最近一次原始圖片：${state.imageName || "最近分析圖片"}。`;
          await analyzeImage();
        } else if (saved.imageDataUrl) {
          await loadImageFromDataUrl(saved.imageDataUrl, saved.imageName || "舊版快取圖片");
          state.imageStoreKey = "";
          els.imageStatusText.textContent = "已還原舊版快取圖片。這張圖可能不是原始畫質，建議重新上傳一次。";
          await analyzeImage();
        }
      } catch (error) {
        console.error("Restore state failed:", error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    function resetState() {
      state.settings = { ...DEFAULT_SETTINGS };
      state.activeTab = "analyze";
      state.paletteSearch = "";
      state.recentViews = [];
      state.imageDataUrl = "";
      state.imageStoreKey = "";
      state.imageName = "";
      state.sourceImage = null;
      state.analysis = null;
      state.chartRecognition = null;
      state.hoverPixel = null;
      state.hoverCellKey = null;
      state.clickedPixel = null;
      state.manualOverrides = {};
      state.chartManualOverrides = {};
      state.detail = null;
      state.activeResultKey = null;
      state.simulatorFocus = null;
      state.previewInteractionMode = "pixel";
      state.ocrStatusText = "";
      state.isAnalyzing = false;
      localStorage.removeItem(STORAGE_KEY);
      void deleteImageBlobFromStore(LAST_IMAGE_STORE_KEY);
      els.imageInput.value = "";
      els.paletteSearchInput.value = "";
      els.imageStatusText.textContent = "尚未載入圖片，現在可以先瀏覽下方的 221 色色卡。";
      syncSettingsInputs();
      renderAll();
      showToast("已重設工具與快取");
    }

    function renderAnalysisSummary() {
      const results = getDisplayedResults();
      if (state.chartRecognition?.summary?.length) {
        const resolvedCells = state.chartRecognition.cells.filter((cell) => getResolvedCellAssignment(cell)).length;
        els.analysisSummaryPill.textContent = `OCR ${state.chartRecognition.summary.length} 色號 / ${resolvedCells} 格`;
        return;
      }
      if (!state.analysis || !results.length) {
        els.analysisSummaryPill.textContent = "尚未分析";
        return;
      }
      els.analysisSummaryPill.textContent = `${results.length} 色 / ${state.analysis.sampledPixelCount.toLocaleString()} 像素`;
    }

    function renderAll() {
      syncSettingsInputs();
      renderTabs();
      renderPaletteBrowser();
      renderRecentViews();
      renderPreviewModeControls();
      renderRecognitionResults();
      renderTop10();
      renderResults();
      renderPreview();
      renderHoverInspector();
      renderClickInspector();
      renderAnalysisSummary();
      renderDetailDrawer();
      renderTomodachiSimulator();
    }

    function handleRootClick(event) {
      const target = event.target.closest("[data-action]");
      if (!target) return;
      const { action } = target.dataset;

      if (action === "switch-tab") {
        setActiveTab(target.dataset.tab);
        renderAll();
      }
      if (action === "copy-hex") {
        copyText(target.dataset.hex, `已複製 ${target.dataset.hex}`);
      }
      if (action === "open-palette") {
        openPaletteDetail(target.dataset.id);
      }
      if (action === "open-result") {
        openResultDetail(target.dataset.key);
      }
      if (action === "set-preview-mode") {
        const nextMode = target.dataset.mode === "cell" ? "cell" : "pixel";
        if (nextMode === "cell" && !state.chartRecognition?.cells?.length) {
          showToast("這張圖目前沒有可用的格子辨識結果");
        } else {
          state.previewInteractionMode = nextMode;
          state.hoverPixel = null;
          state.hoverCellKey = null;
          saveState();
          renderAll();
        }
      }
      if (action === "highlight-result") {
        const item = getDisplayedResults().find((result) => result.key === target.dataset.key);
        if (item) {
          state.activeResultKey = item.key;
          setSimulatorFocus(buildSimulatorFocusFromResult(item));
          renderAll();
        }
      }
      if (action === "apply-manual-override") {
        applyManualOverride();
      }
      if (action === "clear-manual-override") {
        clearManualOverride();
      }
      if (action === "apply-cell-manual-override") {
        applyCellManualOverride();
      }
      if (action === "clear-cell-manual-override") {
        clearCellManualOverride();
      }
      if (action === "set-pixel-focus-mode" && state.detail?.type === "pixel") {
        const mode = target.dataset.mode === "matched" ? "matched" : "raw";
        state.detail.item.displayMode = mode;
        setSimulatorFocus(buildSimulatorFocusFromPixel(state.detail.item, mode));
        renderAll();
      }
    }

    function bindEvents() {
      document.body.addEventListener("click", handleRootClick);

      els.imageInput.addEventListener("change", async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        try {
          await handleImageFile(file);
        } catch (error) {
          console.error(error);
          showToast("圖片載入失敗，請再試一次");
        }
      });

      els.analyzeButton.addEventListener("click", async () => {
        await analyzeImage();
      });

      els.resetButton.addEventListener("click", resetState);

      els.colorLimitSelect.addEventListener("change", (event) => {
        state.settings.colorLimitMode = event.target.value;
        els.customColorLimitInput.disabled = state.settings.colorLimitMode !== "custom";
        saveState();
        if (state.analysis) void analyzeImage();
        renderAll();
      });

      els.customColorLimitInput.addEventListener("input", (event) => {
        state.settings.customColorLimit = clamp(parseInt(event.target.value, 10) || 16, 2, 128);
        saveState();
      });

      els.customColorLimitInput.addEventListener("change", () => {
        if (state.settings.colorLimitMode === "custom" && state.analysis) void analyzeImage();
      });

      els.distanceMethodSelect.addEventListener("change", (event) => {
        state.settings.distanceMethod = event.target.value;
        saveState();
        if (state.analysis) void analyzeImage();
        else renderAll();
      });

      els.ignoreTransparentCheckbox.addEventListener("change", (event) => {
        state.settings.ignoreTransparent = event.target.checked;
        saveState();
        if (state.analysis) void analyzeImage();
      });

      els.mergeSimilarCheckbox.addEventListener("change", (event) => {
        state.settings.mergeSimilar = event.target.checked;
        saveState();
        if (state.analysis) void analyzeImage();
      });

      els.analysisModeRadios.forEach((radio) => {
        radio.addEventListener("change", (event) => {
          if (!event.target.checked) return;
          state.settings.mode = event.target.value;
          state.activeResultKey = null;
          saveState();
          renderAll();
        });
      });

      els.zoomRange.addEventListener("input", (event) => {
        state.settings.zoom = clamp((parseInt(event.target.value, 10) || 100) / 100, 0.2, 5);
        els.zoomLabel.textContent = `${Math.round(state.settings.zoom * 100)}%`;
        renderPreview();
        saveState();
      });

      els.paletteSearchInput.addEventListener("input", (event) => {
        state.paletteSearch = event.target.value;
        renderPaletteBrowser();
        saveState();
      });

      els.exportJsonButton.addEventListener("click", exportJson);
      els.exportCsvButton.addEventListener("click", exportCsv);
      els.exportSwatchesButton.addEventListener("click", exportSwatches);

      els.previewCanvas.addEventListener("mousemove", handlePreviewHover);
      els.previewCanvas.addEventListener("mouseleave", handlePreviewLeave);
      els.previewCanvas.addEventListener("click", handlePreviewClick);

      els.closeDrawerButton.addEventListener("click", closeDetailDrawer);
      els.detailOverlay.addEventListener("click", closeDetailDrawer);
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeDetailDrawer();
        }
      });

      window.addEventListener("resize", () => {
        renderPreview();
        renderTomodachiSimulator();
      });
    }

    function getViewMeta(view = state.activeView) {
      const meta = {
        overview: { title: "總覽", subtitle: "上傳圖片、快速找色與主要操作" },
        analysis: { title: "色號分析", subtitle: "完整分布、熱力圖與進階辨識" },
        palette: { title: "色卡瀏覽", subtitle: "221 色色卡、篩選瀏覽與定位摘要" },
        history: { title: "最近紀錄", subtitle: "本機分析縮圖、摘要與重開資料" },
        settings: { title: "設定", subtitle: "主題、分析預設與匯出偏好" }
      };
      return meta[view] || meta.overview;
    }

    function normalizeView(view) {
      return ["overview", "analysis", "palette", "history", "settings"].includes(view)
        ? view
        : "overview";
    }

    function getResolvedTheme() {
      if (state.theme === "system") {
        return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
      }
      return state.theme === "dark" ? "dark" : "light";
    }

    function applyTheme() {
      const resolved = getResolvedTheme();
      document.body.dataset.theme = resolved;
      if (els.quickThemeButton) {
        els.quickThemeButton.textContent = resolved === "dark" ? "切換至淺色" : "切換至深色";
      }
      if (els.settingsThemeSelect) {
        els.settingsThemeSelect.value = state.theme;
      }
    }

    function setActiveView(view) {
      const nextView = normalizeView(view);
      if (nextView !== state.activeView) {
        state.detail = null;
      }
      state.activeView = nextView;
      state.mobileNavOpen = false;
      saveState();
    }

    function toggleMobileNav(nextOpen = !state.mobileNavOpen) {
      state.mobileNavOpen = nextOpen;
      renderViews();
    }

    function renderViews() {
      const meta = getViewMeta();
      if (els.topbarTitle) {
        els.topbarTitle.textContent = meta.title;
      }
      if (els.topbarSubtitle) {
        els.topbarSubtitle.textContent = meta.subtitle;
      }
      if (els.appShell) {
        els.appShell.classList.toggle("mobile-nav-open", state.mobileNavOpen);
      }
      els.viewButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.view === state.activeView);
      });
      els.viewPanels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.viewPanel === state.activeView);
      });
    }

    function getPaletteToneLabel(item) {
      const hsv = rgbToHsv(item.rgb);
      if (hsv.s < 10) {
        if (hsv.v > 92) return "白色";
        if (hsv.v < 18) return "黑色";
        return "灰色";
      }
      if (hsv.h < 18 || hsv.h >= 345) return "紅色";
      if (hsv.h < 42) return "橘色";
      if (hsv.h < 70) return "黃色";
      if (hsv.h < 155) return "綠色";
      if (hsv.h < 200) return "青色";
      if (hsv.h < 250) return "藍色";
      if (hsv.h < 300) return "紫色";
      return "粉色";
    }

    function buildUsageSummary() {
      if (state.chartRecognition?.summary?.length) {
        const totalCells = state.chartRecognition.cells
          .filter((cell) => getResolvedCellAssignment(cell))
          .length || 1;
        return state.chartRecognition.summary.map((item) => ({
          id: item.id,
          hex: item.hex || paletteById[item.id]?.hex || "#cccccc",
          rgb: item.rgb || paletteById[item.id]?.rgb || [204, 204, 204],
          count: item.count,
          ratio: item.count / totalCells,
          source: "ocr"
        }));
      }

      return getDisplayedResults().map((item) => ({
        id: item.matchedId,
        hex: item.matchedHex,
        rgb: item.matchedRgb,
        count: item.count,
        ratio: item.ratio,
        key: item.key,
        source: "analysis"
      }));
    }

    function renderOverviewMetrics() {
      if (!els.overviewMetrics) return;
      const summary = buildUsageSummary();
      if (!state.analysis || !summary.length) {
        els.overviewMetrics.innerHTML = `
          <div class="metric-card">
            <span class="metric-label">使用色數</span>
            <strong class="metric-value">—</strong>
            <span class="metric-note">等待分析結果</span>
          </div>
          <div class="metric-card">
            <span class="metric-label">總樣本數</span>
            <strong class="metric-value">—</strong>
            <span class="metric-note">像素或格數</span>
          </div>
          <div class="metric-card">
            <span class="metric-label">最常用色</span>
            <strong class="metric-value">—</strong>
            <span class="metric-note">尚未計算</span>
          </div>
          <div class="metric-card">
            <span class="metric-label">分析時間</span>
            <strong class="metric-value">—</strong>
            <span class="metric-note">完成後顯示</span>
          </div>
        `;
        return;
      }

      const top = summary[0];
      const sampleLabel = state.chartRecognition?.summary?.length
        ? `${state.chartRecognition.cells.filter((cell) => getResolvedCellAssignment(cell)).length} 格`
        : `${state.analysis.sampledPixelCount.toLocaleString()} 像素`;

      els.overviewMetrics.innerHTML = `
        <div class="metric-card">
          <span class="metric-label">使用色數</span>
          <strong class="metric-value">${summary.length}</strong>
          <span class="metric-note">${state.chartRecognition?.summary?.length ? "格位辨識結果" : "去重後色群"}</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">總樣本數</span>
          <strong class="metric-value">${sampleLabel}</strong>
          <span class="metric-note">${state.imageName || "尚未命名圖片"}</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">最常用色</span>
          <strong class="metric-value">${top.id}</strong>
          <span class="metric-note">${top.count.toLocaleString()} / ${formatRatio(top.ratio)}</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">分析時間</span>
          <strong class="metric-value">${state.analysisDurationMs ? `${round(state.analysisDurationMs / 1000, 2)} 秒` : "—"}</strong>
          <span class="metric-note">${state.chartRecognition?.summary?.length ? "含 OCR 與顏色回退" : "一般顏色分析"}</span>
        </div>
      `;
    }

    function renderOverviewExportMeta() {
      if (!els.overviewExportMeta) return;
      const results = getDisplayedResults();
      if (!state.analysis || !results.length) {
        els.overviewExportMeta.textContent = "分析完成後，這裡會顯示目前輸出的摘要與條件。";
        return;
      }
      const summary = buildUsageSummary();
      const top = summary[0];
      els.overviewExportMeta.textContent = `目前將輸出 ${results.length} 筆結果，模式為 ${state.settings.mode === "match" ? "自動匹配拼豆色卡" : "僅顯示原始抓色"}，色差採 ${state.settings.distanceMethod === "deltaE" ? "Delta E" : "RGB"}。最常用色為 ${top.id}。`;
    }

    function renderAnalysisMetrics() {
      if (!els.analysisMetrics) return;
      const summary = buildUsageSummary();
      if (!state.analysis || !summary.length) {
        els.analysisMetrics.innerHTML = `<div class="empty-state">分析完成後，這裡會顯示 KPI 卡片。</div>`;
        return;
      }

      const top = summary[0];
      const least = summary[summary.length - 1];
      const totalSampleCount = summary.reduce((sum, item) => sum + item.count, 0);
      const timeText = state.analysisDurationMs ? `${round(state.analysisDurationMs / 1000, 2)} 秒` : "—";

      els.analysisMetrics.innerHTML = `
        <div class="metric-card">
          <span class="metric-label">使用色數</span>
          <strong class="metric-value">${summary.length}</strong>
          <span class="metric-note">不重複色號</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">總樣本數</span>
          <strong class="metric-value">${totalSampleCount.toLocaleString()}</strong>
          <span class="metric-note">${state.chartRecognition?.summary?.length ? "格子總數" : "像素樣本數"}</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">最常見色號</span>
          <strong class="metric-value">${top.id}</strong>
          <span class="metric-note">${top.count.toLocaleString()} / ${formatRatio(top.ratio)}</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">最少使用色號</span>
          <strong class="metric-value">${least.id}</strong>
          <span class="metric-note">${least.count.toLocaleString()} / ${formatRatio(least.ratio)}</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">分析時間</span>
          <strong class="metric-value">${timeText}</strong>
          <span class="metric-note">${state.chartRecognition?.summary?.length ? "完成 OCR 與修正流程" : "完成基礎顏色分析"}</span>
        </div>
      `;
    }

    function renderAnalysisDonut() {
      if (!els.analysisDonut || !els.analysisLegend || !els.analysisRanking) return;
      const summary = buildUsageSummary().slice(0, 6);
      if (!summary.length) {
        els.analysisDonut.style.background = "rgba(255,255,255,0.7)";
        els.analysisDonut.innerHTML = `<div class="donut-hole"><span>尚未分析</span><strong>0 色</strong></div>`;
        els.analysisLegend.innerHTML = `<div class="empty-state">尚未產生分布資料。</div>`;
        els.analysisRanking.innerHTML = `<div class="empty-state">尚未有排行資料。</div>`;
        return;
      }

      let cursor = 0;
      const segments = [];
      summary.forEach((item) => {
        const start = round(cursor * 100, 2);
        cursor += item.ratio;
        const end = round(cursor * 100, 2);
        segments.push(`${item.hex} ${start}% ${end}%`);
      });
      if (cursor < 1) {
        segments.push(`rgba(205, 193, 185, 0.24) ${round(cursor * 100, 2)}% 100%`);
      }

      els.analysisDonut.style.background = `conic-gradient(${segments.join(", ")})`;
      els.analysisDonut.innerHTML = `
        <div class="donut-hole">
          <span>${summary.reduce((sum, item) => sum + item.count, 0).toLocaleString()} 個樣本</span>
          <strong>${buildUsageSummary().length} 色</strong>
        </div>
      `;

      els.analysisLegend.innerHTML = summary.map((item) => `
        <button type="button" class="legend-row is-clickable" data-action="${item.source === "analysis" ? "open-result" : "open-palette"}" data-key="${item.key || ""}" data-id="${item.id}">
          <span class="legend-swatch" style="background:${item.hex}"></span>
          <span class="legend-body">
            <strong>${item.id}</strong>
          </span>
          <span class="legend-metric">
            <strong>${item.count.toLocaleString()}</strong>
            <span class="tiny">${formatRatio(item.ratio)}</span>
          </span>
        </button>
      `).join("");

      els.analysisRanking.innerHTML = summary.map((item, index) => `
        <button type="button" class="ranking-row" data-action="${item.source === "analysis" ? "open-result" : "open-palette"}" data-key="${item.key || ""}" data-id="${item.id}">
          <span class="ranking-rank">${index + 1}</span>
          <span class="ranking-swatch" style="background:${item.hex}"></span>
          <span class="ranking-body">
            <strong>${item.id}</strong>
          </span>
          <span class="ranking-metric">
            <strong>${item.count.toLocaleString()}</strong>
            <span class="tiny">${formatRatio(item.ratio)}</span>
          </span>
        </button>
      `).join("");
    }

    function renderAnalysisHeatmap() {
      if (!els.analysisHeatmapCanvas || !els.analysisHeatmapLegend) return;

      const canvas = els.analysisHeatmapCanvas;
      const ctx = canvas.getContext("2d");
      const width = Math.max(320, canvas.parentElement?.clientWidth || 720);
      const sourceAspect = state.sourceImage
        ? clamp(state.sourceImage.height / Math.max(1, state.sourceImage.width), 0.68, 1.18)
        : 0.68;
      const height = Math.round(width * sourceAspect);
      const dpr = configureDisplayCanvas(canvas, width, height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = getResolvedTheme() === "dark" ? "#2b2121" : "#f8eee7";
      ctx.fillRect(0, 0, width, height);

      const summary = buildUsageSummary().slice(0, 6);
      if (!state.sourceImage || !summary.length) {
        ctx.fillStyle = getResolvedTheme() === "dark" ? "#d8c3bb" : "#7f6c67";
        ctx.font = "600 18px 'Noto Sans TC', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("分析完成後，這裡會顯示主色分布熱力圖。", width / 2, height / 2);
        els.analysisHeatmapLegend.innerHTML = `<div class="empty-state">分析完成後，這裡會顯示熱力圖圖例。</div>`;
        return;
      }

      const containScale = Math.min(width / state.sourceImage.width, height / state.sourceImage.height);
      const drawWidth = state.sourceImage.width * containScale;
      const drawHeight = state.sourceImage.height * containScale;
      const drawX = (width - drawWidth) / 2;
      const drawY = (height - drawHeight) / 2;

      ctx.save();
      ctx.globalAlpha = 0.24;
      ctx.drawImage(state.sourceImage, drawX, drawY, drawWidth, drawHeight);
      ctx.restore();

      const sampleCanvas = document.createElement("canvas");
      const sampleWidth = 140;
      const sampleHeight = Math.max(60, Math.round(sampleWidth * (state.sourceImage.height / state.sourceImage.width)));
      sampleCanvas.width = sampleWidth;
      sampleCanvas.height = sampleHeight;
      const sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });
      sampleCtx.drawImage(state.sourceImage, 0, 0, sampleWidth, sampleHeight);
      const imageData = sampleCtx.getImageData(0, 0, sampleWidth, sampleHeight);
      const data = imageData.data;
      const threshold = state.settings.distanceMethod === "rgb" ? 96 : 22;

      for (let index = 0; index < data.length; index += 4) {
        const alpha = data[index + 3];
        if (alpha < 20) {
          data[index + 3] = 0;
          continue;
        }

        const rgb = [data[index], data[index + 1], data[index + 2]];
        let best = summary[0];
        let bestDistance = Number.POSITIVE_INFINITY;
        summary.forEach((item) => {
          const distance = colorDistance(rgb, item.rgb, state.settings.distanceMethod);
          if (distance < bestDistance) {
            best = item;
            bestDistance = distance;
          }
        });

        const tint = normalizeColorInput(best.rgb);
        data[index] = tint.r;
        data[index + 1] = tint.g;
        data[index + 2] = tint.b;
        data[index + 3] = bestDistance <= threshold ? 205 : 72;
      }

      sampleCtx.putImageData(imageData, 0, 0);
      ctx.save();
      ctx.globalAlpha = 0.86;
      ctx.drawImage(sampleCanvas, drawX, drawY, drawWidth, drawHeight);
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = getResolvedTheme() === "dark" ? "rgba(255, 214, 207, 0.3)" : "rgba(173, 113, 97, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(drawX, drawY, drawWidth, drawHeight);
      ctx.restore();

      els.analysisHeatmapLegend.innerHTML = summary.map((item) => `
        <button type="button" class="legend-row heatmap-row is-clickable" data-action="${item.source === "analysis" ? "open-result" : "open-palette"}" data-key="${item.key || ""}" data-id="${item.id}">
          <span class="legend-swatch" style="background:${item.hex}"></span>
          <span class="legend-body">
            <strong>${item.id}</strong>
          </span>
          <span class="legend-metric">
            <strong>${item.count.toLocaleString()}</strong>
            <span class="tiny">${formatRatio(item.ratio)}</span>
          </span>
        </button>
      `).join("");
    }

    function renderAnalysisWorkspace() {
      renderAnalysisMetrics();
      renderAnalysisDonut();
      renderAnalysisHeatmap();
      if (els.analysisResultsSummary) {
        const results = getDisplayedResults();
        els.analysisResultsSummary.textContent = results.length
          ? `目前顯示 ${results.length} 筆結果。點下方列項可查看詳情、複製 HEX，或高亮相近像素。`
          : "分析完成後，這裡會整理成表格式明細，方便快速比對與定位。";
      }
    }

    function renderFavoritesStrip() {
      if (!els.favoritePaletteStrip || !els.paletteFavoritesCount) return;
      const favorites = state.favorites
        .map((id) => paletteById[id])
        .filter(Boolean)
        .sort((a, b) => sortPaletteIds(a.id, b.id));

      els.paletteFavoritesCount.textContent = `${favorites.length} 色`;
      if (!favorites.length) {
        els.favoritePaletteStrip.innerHTML = `<div class="empty-state">尚未收藏色票。可以從下方色卡直接加入常用色。</div>`;
        return;
      }

      els.favoritePaletteStrip.innerHTML = favorites.map((item) => `
        <div class="color-chip">
          <button type="button" data-action="open-palette" data-id="${item.id}">
            <span class="swatch small" style="background:${item.hex}"></span>
            <span class="meta">
              <strong>${item.id}</strong>
              <span>${item.hex}</span>
            </span>
          </button>
        </div>
      `).join("");
    }

    function renderRecentViews() {
      if (!els.recentColors) return;
      if (!state.recentViews.length) {
        els.recentColors.innerHTML = `<div class="empty-state">目前還沒有最近查看色。點一下任一色票後，這裡會自動記錄。</div>`;
        return;
      }

      els.recentColors.innerHTML = state.recentViews
        .map((id) => {
          const item = paletteById[id];
          if (!item) return "";
          const favorite = state.favorites.includes(item.id);
          return `
            <div class="color-chip">
              <button type="button" data-action="open-palette" data-id="${item.id}">
                <span class="swatch small" style="background:${item.hex}"></span>
                <span class="meta">
                  <strong>${item.id}${favorite ? " ★" : ""}</strong>
                  <span>${item.hex}</span>
                </span>
              </button>
            </div>
          `;
        })
        .join("");
    }

    function getFilteredPaletteItems() {
      const query = state.paletteSearch.trim().toLowerCase();
      return BUILTIN_PALETTE.filter((item) => {
        if (query && !(
          item.id.toLowerCase().includes(query) ||
          item.hex.toLowerCase().includes(query) ||
          item.name.toLowerCase().includes(query)
        )) {
          return false;
        }
        if (state.paletteFilters.group !== "all" && item.id[0] !== state.paletteFilters.group) {
          return false;
        }
        if (state.paletteFilters.tone !== "all" && getPaletteToneLabel(item) !== state.paletteFilters.tone) {
          return false;
        }
        if (state.paletteFilters.favoritesOnly && !state.favorites.includes(item.id)) {
          return false;
        }
        return true;
      });
    }

    function getPaletteInspectorItem(filtered) {
      const visible = Array.isArray(filtered) ? filtered : getFilteredPaletteItems();
      if (!visible.length) return null;

      if (state.detail?.type === "palette") {
        const active = visible.find((item) => item.id === state.detail.id);
        if (active) return active;
      }

      const recent = state.recentViews.find((id) => visible.some((item) => item.id === id));
      if (recent && paletteById[recent]) {
        return paletteById[recent];
      }

      return visible[0];
    }

    function renderPaletteInspector(filtered = getFilteredPaletteItems()) {
      const inspector = document.getElementById("paletteInspector");
      if (!inspector) return;

      const item = getPaletteInspectorItem(filtered);
      if (!item) {
        inspector.innerHTML = `<div class="palette-inspector-empty empty-state">找不到符合目前條件的色票。</div>`;
        return;
      }

      const hsv = rgbToHsv(item.rgb);
      const tone = getPaletteToneLabel(item);
      const mapped = mapColorToTomodachiPalette(item.rgb);
      const isFavorite = state.favorites.includes(item.id);

      inspector.innerHTML = `
        <div class="palette-inspector-swatch-shell">
          <div class="palette-inspector-swatch" style="background:${item.hex}">
            <span class="palette-inspector-badge">${item.id}</span>
            <button
              type="button"
              class="palette-inspector-icon ${isFavorite ? "is-active" : ""}"
              data-action="toggle-favorite"
              data-id="${item.id}"
              aria-label="${isFavorite ? "移除常用色" : "加入常用色"}"
            >${isFavorite ? "★" : "☆"}</button>
          </div>
        </div>

        <div class="palette-inspector-heading">
          <h3>${item.id}</h3>
          <p>${tone} / ${item.name}</p>
        </div>

        <div class="palette-inspector-meta">
          <div class="palette-inspector-row">
            <span>HEX</span>
            <strong class="mono">${item.hex}</strong>
          </div>
          <div class="palette-inspector-row">
            <span>RGB</span>
            <strong>${formatRgb(item.rgb)}</strong>
          </div>
          <div class="palette-inspector-row">
            <span>HSV</span>
            <strong>${hsv.h}°, ${hsv.s}%, ${hsv.v}%</strong>
          </div>
          <div class="palette-inspector-row">
            <span>色差（ΔE）</span>
            <strong>—</strong>
          </div>
        </div>

        <div class="palette-inspector-block">
          <strong>朋友收集色盤位置（模擬）</strong>
          <div class="palette-inspector-canvas-wrap">
            <canvas id="paletteTomodachiPaletteCanvas" width="640" height="360" aria-label="色卡頁朋友收集上方大色盤模擬"></canvas>
            <canvas id="paletteTomodachiHueCanvas" width="640" height="72" aria-label="色卡頁朋友收集底部色相條模擬"></canvas>
          </div>
          <div class="palette-inspector-coordinates">
            <div><span>色相位置</span><strong>約 ${Math.round(mapped.hueSliderX)}%</strong></div>
            <div><span>色盤位置 X</span><strong>約 ${Math.round(mapped.paletteX)}%</strong></div>
            <div><span>色盤位置 Y</span><strong>約 ${Math.round(mapped.paletteY)}%</strong></div>
          </div>
          <div class="helper-box compact-helper">${describeHexPosition(item.rgb)}</div>
          <div id="paletteTomodachiLegend" hidden></div>
          <div id="paletteTomodachiGuideTitle" hidden></div>
          <div id="paletteTomodachiGuideText" hidden></div>
        </div>

        <div class="palette-inspector-actions">
          <button type="button" class="secondary-btn" data-action="toggle-favorite" data-id="${item.id}">
            ${isFavorite ? "移除常用色" : "加入常用色"}
          </button>
          <button type="button" class="ghost-btn" data-action="copy-hex" data-hex="${item.hex}">複製 HEX</button>
        </div>
      `;

      renderSingleColorDetailSimulator(
        "palette",
        createSimulatorColorDescriptor(item.rgb, {
          id: item.id,
          label: `${item.id} ${item.hex}`,
          hex: item.hex
        }),
        `目前定位：${item.id}`
      );
    }

    function renderPaletteBrowser() {
      if (!els.paletteBrowser) return;
      const query = state.paletteSearch.trim().toLowerCase();
      const filtered = getFilteredPaletteItems();
      const filterSummary = [];
      if (state.paletteFilters.group !== "all") {
        filterSummary.push(`${state.paletteFilters.group} 區`);
      }
      if (state.paletteFilters.tone !== "all") {
        filterSummary.push(state.paletteFilters.tone);
      }
      if (state.paletteFilters.favoritesOnly) {
        filterSummary.push("僅收藏");
      }

      els.paletteSearchSummary.textContent = query || filterSummary.length
        ? `找到 ${filtered.length} 筆結果${filterSummary.length ? `，條件：${filterSummary.join(" / ")}` : ""}。`
        : `顯示全部 ${BUILTIN_PALETTE.length} 色。`;

      const activeItem = getPaletteInspectorItem(filtered);
      const activeId = activeItem?.id || "";
      const orderedGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "M"];
      const grouped = orderedGroups
        .map((group) => ({
          group,
          items: filtered.filter((item) => item.id.startsWith(group))
        }))
        .filter((entry) => entry.items.length);

      els.paletteBrowser.innerHTML = filtered.length
        ? grouped.map(({ group, items }) => `
            <section class="palette-group-section">
              <div class="palette-group-header">
                <span class="palette-group-pill">${group} 區</span>
                <span class="palette-group-count">${items.length} 色</span>
              </div>
              <div class="palette-group-grid">
                ${items.map((item) => {
                  const favorite = state.favorites.includes(item.id);
                  const tone = getPaletteToneLabel(item);
                  return `
                    <button type="button" class="palette-card ${activeId === item.id ? "is-active" : ""}" data-action="open-palette" data-id="${item.id}">
                      <span class="palette-fav-btn ${favorite ? "is-active" : ""}" data-action="toggle-favorite" data-id="${item.id}" title="${favorite ? "移除常用色" : "加入常用色"}">${favorite ? "★" : "☆"}</span>
                      <span class="swatch" style="background:${item.hex}"></span>
                      <span class="palette-card-body">
                        <span class="palette-card-title">
                          <strong>${item.id}</strong>
                        </span>
                        <span class="mono">${item.hex}</span>
                        <span class="tiny">${tone} / ${item.name}</span>
                      </span>
                    </button>
                  `;
                }).join("")}
              </div>
            </section>
          `).join("")
        : `<div class="empty-state">找不到符合目前篩選條件的色票。</div>`;

      renderPaletteInspector(filtered);
    }

    function renderHistoryView() {
      if (!els.historyList || !els.historyCount || !els.historySummary) return;
      const query = state.historyFilters.query.trim().toLowerCase();
      const filtered = state.historyItems.filter((item) => {
        if (state.historyFilters.mode !== "all" && item.sourceMode !== state.historyFilters.mode) {
          return false;
        }
        if (!query) return true;
        return [
          item.imageName,
          item.summary?.topColors?.map((entry) => entry.id).join(" "),
          item.summary?.topColors?.map((entry) => entry.hex).join(" ")
        ].join(" ").toLowerCase().includes(query);
      });

      els.historyCount.textContent = `${filtered.length} 筆`;
      els.historySummary.textContent = state.historyItems.length
        ? `目前共保存 ${state.historyItems.length} 筆本機紀錄，篩選後顯示 ${filtered.length} 筆。`
        : "尚未建立任何分析紀錄。";

      if (!filtered.length) {
        els.historyList.innerHTML = `<div class="empty-state">目前沒有符合條件的歷史紀錄。</div>`;
        return;
      }

      els.historyList.innerHTML = filtered.map((item) => `
        <article class="history-card">
          <div class="history-thumbnail">
            ${item.thumbnailDataUrl ? `<img src="${item.thumbnailDataUrl}" alt="${escapeHtml(item.imageName || "分析縮圖")}">` : ""}
          </div>
          <div class="history-card-body">
            <div class="history-card-header">
              <div>
                <strong>${escapeHtml(item.imageName || "未命名圖片")}</strong>
                <div class="tiny">${new Date(item.createdAt).toLocaleString("zh-TW")}</div>
              </div>
              <span class="history-badge">${item.sourceMode === "ocr" ? "含 OCR" : "一般分析"}</span>
            </div>
            <div class="history-card-meta">
              <span class="mini-tag">${item.summary?.totalColors || 0} 色</span>
              <span class="mini-tag">${item.summary?.sampleCount?.toLocaleString?.() || 0} 樣本</span>
              <span class="mini-tag">${item.summary?.durationMs ? `${round(item.summary.durationMs / 1000, 2)} 秒` : "—"}</span>
            </div>
            <div class="history-card-swatches">
              ${(item.summary?.topColors || []).slice(0, 5).map((entry) => `
                <span class="mini-tag" style="background:${entry.hex}20; color:inherit; border:1px solid rgba(0,0,0,0.06);">${entry.id}</span>
              `).join("")}
            </div>
            <div class="history-card-actions">
              <button type="button" class="mini-btn" data-action="open-history" data-id="${item.id}">重開</button>
              <button type="button" class="mini-btn" data-action="export-history" data-id="${item.id}">單筆匯出</button>
              <button type="button" class="mini-btn" data-action="delete-history" data-id="${item.id}">刪除</button>
            </div>
          </div>
        </article>
      `).join("");
    }

    function renderInfoModal() {
      if (!els.infoModalOverlay || !els.infoModalTitle || !els.infoModalBody) return;
      const isOpen = Boolean(state.infoModal);
      els.infoModalOverlay.classList.toggle("is-open", isOpen);
      if (!isOpen) return;

      if (state.infoModal === "tutorial") {
        els.infoModalTitle.textContent = "使用教學";
        els.infoModalBody.innerHTML = `
          <section>
            <h4>1. 上傳並分析</h4>
            <p>在「總覽」上傳拼豆圖後，按下「分析圖片」。完成後會同步更新總覽、色號分析與最近紀錄。</p>
          </section>
          <section>
            <h4>2. 查看詳情</h4>
            <p>點結果卡、色卡或預覽圖中的像素後，右側詳情欄會顯示 HEX、RGB、HSV、候選色與《朋友收集》定位。</p>
          </section>
          <section>
            <h4>3. 進階修正</h4>
            <p>如果是帶格位與文字的拼豆圖，請到「色號分析」展開進階分析，可查看 OCR 結果、格子修正與手動指定。</p>
          </section>
          <section>
            <h4>4. 收藏與歷史</h4>
            <p>常用色可在「色卡瀏覽」收藏；每次手動分析後會自動建立一筆本機紀錄，可在「最近紀錄」重開。</p>
          </section>
        `;
      } else {
        els.infoModalTitle.textContent = "關於我";
        els.infoModalBody.innerHTML = `
          <section>
            <h4>工具定位</h4>
            <p>這個版本以《朋友收集》的找色工作流為核心，把拼豆色號、HEX 對照與定位整合成同一個靜態工具。</p>
          </section>
          <section>
            <h4>目前保留的能力</h4>
            <p>圖片上傳、顏色分析、OCR 格位辨識、手動修正、JSON / CSV / 色票清單匯出、內建 221 色色卡與本機歷史都仍可用。</p>
          </section>
          <section>
            <h4>版本說明</h4>
            <p>這一版著重於資訊架構與 UI 改版，材料估算、模板獨立頁與備份匯入匯出尚未納入。</p>
          </section>
        `;
      }
    }

    async function putHistoryRecord(record) {
      const db = await openImageDatabase();
      if (!db) return false;

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(HISTORY_STORE_NAME, "readwrite");
        transaction.objectStore(HISTORY_STORE_NAME).put(record);
        transaction.oncomplete = () => resolve(true);
        transaction.onerror = () => reject(transaction.error || new Error("History record write failed"));
        transaction.onabort = () => reject(transaction.error || new Error("History record write aborted"));
      }).catch((error) => {
        console.warn("Failed to save history record:", error);
        return false;
      });
    }

    async function putHistoryBlob(key, blob) {
      const db = await openImageDatabase();
      if (!db) return false;

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(HISTORY_BLOB_STORE_NAME, "readwrite");
        transaction.objectStore(HISTORY_BLOB_STORE_NAME).put(blob, key);
        transaction.oncomplete = () => resolve(true);
        transaction.onerror = () => reject(transaction.error || new Error("History blob write failed"));
        transaction.onabort = () => reject(transaction.error || new Error("History blob write aborted"));
      }).catch((error) => {
        console.warn("Failed to save history blob:", error);
        return false;
      });
    }

    async function getHistoryBlob(key) {
      const db = await openImageDatabase();
      if (!db) return null;

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(HISTORY_BLOB_STORE_NAME, "readonly");
        const request = transaction.objectStore(HISTORY_BLOB_STORE_NAME).get(key);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error || new Error("History blob read failed"));
      }).catch((error) => {
        console.warn("Failed to load history blob:", error);
        return null;
      });
    }

    async function deleteHistoryBlob(key) {
      const db = await openImageDatabase();
      if (!db) return false;

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(HISTORY_BLOB_STORE_NAME, "readwrite");
        transaction.objectStore(HISTORY_BLOB_STORE_NAME).delete(key);
        transaction.oncomplete = () => resolve(true);
        transaction.onerror = () => reject(transaction.error || new Error("History blob delete failed"));
        transaction.onabort = () => reject(transaction.error || new Error("History blob delete aborted"));
      }).catch((error) => {
        console.warn("Failed to delete history blob:", error);
        return false;
      });
    }

    async function getAllHistoryRecords() {
      const db = await openImageDatabase();
      if (!db) return [];

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(HISTORY_STORE_NAME, "readonly");
        const request = transaction.objectStore(HISTORY_STORE_NAME).getAll();
        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => reject(request.error || new Error("History read failed"));
      }).catch((error) => {
        console.warn("Failed to load history records:", error);
        return [];
      });
    }

    async function deleteHistoryRecordFromStore(id) {
      const db = await openImageDatabase();
      if (!db) return false;

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(HISTORY_STORE_NAME, "readwrite");
        transaction.objectStore(HISTORY_STORE_NAME).delete(id);
        transaction.oncomplete = () => resolve(true);
        transaction.onerror = () => reject(transaction.error || new Error("History record delete failed"));
        transaction.onabort = () => reject(transaction.error || new Error("History record delete aborted"));
      }).catch((error) => {
        console.warn("Failed to delete history record:", error);
        return false;
      });
    }

    function historyImageKey(id) {
      return `history:${id}:image`;
    }

    function historyThumbKey(id) {
      return `history:${id}:thumb`;
    }

    function canvasToBlob(canvas, type = "image/png", quality) {
      return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), type, quality);
      });
    }

    async function loadHistoryIntoState() {
      const records = await getAllHistoryRecords();
      state.historyItems = records.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      renderHistoryView();
    }

    async function trimHistoryLimit() {
      if (state.historyItems.length <= MAX_HISTORY) return;
      const extras = state.historyItems.slice(MAX_HISTORY);
      for (const item of extras) {
        await deleteHistoryRecordFromStore(item.id);
        await deleteHistoryBlob(item.imageRef);
        await deleteHistoryBlob(item.thumbnailRef);
      }
      state.historyItems = state.historyItems.slice(0, MAX_HISTORY);
    }

    async function persistCurrentHistoryRecord() {
      if (!state.sourceImage || !state.analysis) return;

      const sampleCanvas = createSampleCanvasFromSource();
      const thumbnailBlob = await canvasToBlob(sampleCanvas);
      const thumbnailDataUrl = sampleCanvas.toDataURL("image/png");
      let originalBlob = await loadImageBlobFromStore(state.imageStoreKey || LAST_IMAGE_STORE_KEY);
      if (!originalBlob) {
        originalBlob = await canvasToBlob(state.sourceCanvas);
      }
      if (!originalBlob || !thumbnailBlob) {
        return;
      }

      const historyId = `history-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const summary = buildUsageSummary();
      const record = {
        id: historyId,
        createdAt: new Date().toISOString(),
        imageName: state.imageName || "未命名圖片",
        thumbnailRef: historyThumbKey(historyId),
        imageRef: historyImageKey(historyId),
        thumbnailDataUrl,
        summary: {
          totalColors: summary.length,
          sampleCount: summary.reduce((sum, item) => sum + item.count, 0),
          topColors: summary.slice(0, 6).map((item) => ({
            id: item.id,
            hex: item.hex,
            count: item.count,
            ratio: round(item.ratio, 6)
          })),
          durationMs: state.analysisDurationMs
        },
        analysisSnapshot: {
          settings: getAnalysisSettingsSnapshot(),
          results: buildExportRows(),
          chartSummary: state.chartRecognition?.summary || null
        },
        sourceMode: state.chartRecognition?.summary?.length ? "ocr" : "pixel"
      };

      const recordSaved = await putHistoryRecord(record);
      const imageSaved = await putHistoryBlob(record.imageRef, originalBlob);
      const thumbSaved = await putHistoryBlob(record.thumbnailRef, thumbnailBlob);
      if (!recordSaved || !imageSaved || !thumbSaved) {
        return;
      }

      state.historyItems = [record, ...state.historyItems]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      await trimHistoryLimit();
      renderHistoryView();
    }

    async function openHistoryRecord(id) {
      const record = state.historyItems.find((item) => item.id === id);
      if (!record) return;
      const blob = await getHistoryBlob(record.imageRef);
      if (!blob) {
        showToast("這筆歷史紀錄找不到原始圖片");
        return;
      }

      state.settings = {
        ...state.settings,
        ...(record.analysisSnapshot?.settings || {})
      };
      syncSettingsInputs();
      await loadImageFromBlob(blob, record.imageName || "歷史紀錄圖片");
      await saveImageBlobToStore(blob, LAST_IMAGE_STORE_KEY);
      state.imageStoreKey = LAST_IMAGE_STORE_KEY;
      state.detail = null;
      state.activeResultKey = null;
      state.clickedPixel = null;
      state.hoverPixel = null;
      state.hoverCellKey = null;
      state.chartManualOverrides = {};
      state.manualOverrides = {};
      state.ocrStatusText = "";
      els.imageStatusText.textContent = `已載入歷史紀錄：${record.imageName || "未命名圖片"}。`;
      await analyzeImage({ captureHistory: false });
      setActiveView("overview");
      showToast("已重開歷史紀錄");
      renderAll();
    }

    async function deleteHistoryRecordAndRefresh(id) {
      const record = state.historyItems.find((item) => item.id === id);
      if (!record) return;
      await deleteHistoryRecordFromStore(id);
      await deleteHistoryBlob(record.imageRef);
      await deleteHistoryBlob(record.thumbnailRef);
      state.historyItems = state.historyItems.filter((item) => item.id !== id);
      saveState();
      renderHistoryView();
      showToast("已刪除歷史紀錄");
    }

    async function clearAllHistoryRecords() {
      const items = [...state.historyItems];
      for (const item of items) {
        await deleteHistoryRecordFromStore(item.id);
        await deleteHistoryBlob(item.imageRef);
        await deleteHistoryBlob(item.thumbnailRef);
      }
      state.historyItems = [];
      saveState();
      renderHistoryView();
      showToast("已清空所有歷史紀錄");
    }

    function exportHistoryRecord(id) {
      const record = state.historyItems.find((item) => item.id === id);
      if (!record) return;

      if (state.exportPrefs.historyFormat === "csv") {
        const rows = [
          ["id", "createdAt", "imageName", "sourceMode", "totalColors", "sampleCount", "topColors"].join(","),
          [
            record.id,
            record.createdAt,
            `"${String(record.imageName || "").replaceAll('"', '""')}"`,
            record.sourceMode,
            record.summary?.totalColors || 0,
            record.summary?.sampleCount || 0,
            `"${(record.summary?.topColors || []).map((item) => `${item.id}:${item.hex}:${item.count}`).join(" | ")}"`
          ].join(",")
        ];
        downloadTextFile(`${record.id}.csv`, rows.join("\n"), "text/csv;charset=utf-8");
      } else {
        const payload = {
          ...record,
          analysisSnapshot: state.exportPrefs.includeSettings
            ? record.analysisSnapshot
            : {
                ...record.analysisSnapshot,
                settings: undefined
              }
        };
        downloadTextFile(`${record.id}.json`, JSON.stringify(payload, null, 2), "application/json");
      }
      showToast("已匯出歷史紀錄");
    }

    function toggleFavorite(paletteId) {
      if (!paletteById[paletteId]) return;
      if (state.favorites.includes(paletteId)) {
        state.favorites = state.favorites.filter((id) => id !== paletteId);
        showToast(`已移除收藏 ${paletteId}`);
      } else {
        state.favorites = [...state.favorites, paletteId].sort(sortPaletteIds);
        showToast(`已加入收藏 ${paletteId}`);
      }
      saveState();
      renderFavoritesStrip();
      renderRecentViews();
      renderPaletteBrowser();
    }

    function renderTabs() {
      renderViews();
    }

    function setActiveTab(tab) {
      setActiveView(tab === "palette" ? "palette" : "overview");
    }

    function syncSettingsInputs() {
      els.heroPaletteCount.textContent = BUILTIN_PALETTE.length;
      els.paletteStatusPill.textContent = `已載入 ${BUILTIN_PALETTE.length} 色`;
      els.paletteCountPill.textContent = `${BUILTIN_PALETTE.length} 色`;
      els.colorLimitSelect.value = state.settings.colorLimitMode;
      els.customColorLimitInput.value = state.settings.customColorLimit;
      els.customColorLimitInput.disabled = state.settings.colorLimitMode !== "custom";
      els.distanceMethodSelect.value = state.settings.distanceMethod;
      els.ignoreTransparentCheckbox.checked = state.settings.ignoreTransparent;
      els.mergeSimilarCheckbox.checked = state.settings.mergeSimilar;
      els.analysisModeRadios.forEach((radio) => {
        radio.checked = radio.value === state.settings.mode;
      });
      els.zoomRange.value = Math.round(state.settings.zoom * 100);
      els.zoomLabel.textContent = `${Math.round(state.settings.zoom * 100)}%`;
      els.paletteSearchInput.value = state.paletteSearch;

      if (els.paletteGroupFilter) {
        els.paletteGroupFilter.value = state.paletteFilters.group;
      }
      if (els.paletteToneFilter) {
        els.paletteToneFilter.value = state.paletteFilters.tone;
      }
      if (els.paletteFavoritesOnlyCheckbox) {
        els.paletteFavoritesOnlyCheckbox.checked = state.paletteFilters.favoritesOnly;
      }
      if (els.historySearchInput && document.activeElement !== els.historySearchInput) {
        els.historySearchInput.value = state.historyFilters.query;
      }
      if (els.historyFilterSelect) {
        els.historyFilterSelect.value = state.historyFilters.mode;
      }
      if (els.settingsThemeSelect) {
        els.settingsThemeSelect.value = state.theme;
      }
      if (els.settingsColorLimitSelect) {
        els.settingsColorLimitSelect.value = state.settings.colorLimitMode;
      }
      if (els.settingsCustomColorLimitInput) {
        els.settingsCustomColorLimitInput.value = state.settings.customColorLimit;
        els.settingsCustomColorLimitInput.disabled = state.settings.colorLimitMode !== "custom";
      }
      if (els.settingsDistanceMethodSelect) {
        els.settingsDistanceMethodSelect.value = state.settings.distanceMethod;
      }
      if (els.settingsIgnoreTransparentCheckbox) {
        els.settingsIgnoreTransparentCheckbox.checked = state.settings.ignoreTransparent;
      }
      if (els.settingsMergeSimilarCheckbox) {
        els.settingsMergeSimilarCheckbox.checked = state.settings.mergeSimilar;
      }
      if (els.settingsModeSelect) {
        els.settingsModeSelect.value = state.settings.mode;
      }
      if (els.settingsHistoryFormatSelect) {
        els.settingsHistoryFormatSelect.value = state.exportPrefs.historyFormat;
      }
      if (els.settingsIncludeSettingsCheckbox) {
        els.settingsIncludeSettingsCheckbox.checked = state.exportPrefs.includeSettings;
      }
      applyTheme();
    }

    function saveState() {
      const payload = {
        version: 2,
        settings: state.settings,
        activeView: state.activeView,
        theme: state.theme,
        favorites: state.favorites,
        historyFilters: state.historyFilters,
        exportPrefs: state.exportPrefs,
        paletteFilters: state.paletteFilters,
        paletteSearch: state.paletteSearch,
        recentViews: state.recentViews,
        imageStoreKey: state.imageStoreKey,
        imageName: state.imageName,
        manualOverrides: state.manualOverrides,
        chartManualOverrides: state.chartManualOverrides,
        previewInteractionMode: state.previewInteractionMode
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    }

    async function restoreState() {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
      if (!raw) return;

      try {
        const saved = JSON.parse(raw);
        state.settings = { ...DEFAULT_SETTINGS, ...(saved.settings || {}) };
        state.activeView = normalizeView(saved.activeView || (saved.activeTab === "palette" ? "palette" : "overview"));
        state.theme = ["light", "dark", "system"].includes(saved.theme) ? saved.theme : DEFAULT_THEME;
        state.favorites = Array.isArray(saved.favorites)
          ? saved.favorites.filter((id) => paletteById[id]).sort(sortPaletteIds)
          : [];
        state.historyFilters = {
          query: saved.historyFilters?.query || "",
          mode: ["all", "ocr", "pixel"].includes(saved.historyFilters?.mode) ? saved.historyFilters.mode : "all"
        };
        state.exportPrefs = {
          ...DEFAULT_EXPORT_PREFS,
          ...(saved.exportPrefs || {})
        };
        state.paletteFilters = {
          group: saved.paletteFilters?.group || "all",
          tone: saved.paletteFilters?.tone || "all",
          favoritesOnly: Boolean(saved.paletteFilters?.favoritesOnly)
        };
        state.paletteSearch = saved.paletteSearch || "";
        state.recentViews = Array.isArray(saved.recentViews)
          ? saved.recentViews.filter((id) => paletteById[id])
          : [];
        state.imageStoreKey = saved.imageStoreKey || "";
        state.manualOverrides = Object.fromEntries(
          Object.entries(saved.manualOverrides || {}).filter(([, paletteId]) => paletteById[paletteId])
        );
        state.chartManualOverrides = Object.fromEntries(
          Object.entries(saved.chartManualOverrides || {}).filter(([, paletteId]) => paletteById[paletteId])
        );
        state.previewInteractionMode = saved.previewInteractionMode === "cell" ? "cell" : "pixel";
        syncSettingsInputs();

        const storedBlob = state.imageStoreKey
          ? await loadImageBlobFromStore(state.imageStoreKey)
          : null;

        if (storedBlob) {
          await loadImageFromBlob(storedBlob, saved.imageName || "最近分析圖片");
          els.imageStatusText.textContent = `已還原最近一次原始圖片：${state.imageName || "最近分析圖片"}。`;
          await analyzeImage({ captureHistory: false });
        }
      } catch (error) {
        console.error("Restore state failed:", error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    function resetState() {
      state.imageDataUrl = "";
      state.imageStoreKey = "";
      state.imageName = "";
      state.sourceImage = null;
      state.analysis = null;
      state.chartRecognition = null;
      state.hoverPixel = null;
      state.hoverCellKey = null;
      state.clickedPixel = null;
      state.manualOverrides = {};
      state.chartManualOverrides = {};
      state.detail = null;
      state.activeResultKey = null;
      state.simulatorFocus = null;
      state.previewInteractionMode = "pixel";
      state.ocrStatusText = "";
      state.isAnalyzing = false;
      state.analysisDurationMs = 0;
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      void deleteImageBlobFromStore(LAST_IMAGE_STORE_KEY);
      els.imageInput.value = "";
      els.imageStatusText.textContent = "尚未載入圖片，現在可以先瀏覽內建色卡與最近紀錄。";
      saveState();
      renderAll();
      showToast("已清除目前工作區內容");
    }

    async function analyzeImage(options = {}) {
      if (!state.sourceImage) return;
      const { captureHistory = false } = options;
      const startedAt = performance.now();
      const runId = state.analysisRunId + 1;
      state.analysisRunId = runId;
      state.isAnalyzing = true;
      state.activeResultKey = null;
      state.clickedPixel = null;
      state.hoverPixel = null;
      state.hoverCellKey = null;
      state.detail = null;
      state.chartRecognition = null;
      state.ocrStatusText = "正在分析圖片與整理顏色…";
      renderAll();

      const sampleCanvas = createSampleCanvasFromSource();
      const sampleCtx = sampleCanvas.getContext("2d");
      const sampleImageData = sampleCtx.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height);
      const settings = getAnalysisSettingsSnapshot();
      const extracted = extractDominantColors(sampleImageData, settings);

      try {
        state.analysis = {
          ...extracted,
          settingsSnapshot: settings
        };
        if (runId !== state.analysisRunId) return;

        let chartRecognition = null;
        try {
          state.ocrStatusText = "正在建立 OCR / 格位辨識圖層…";
          renderRecognitionResults();
          chartRecognition = await recognizeChartColorsFromImage();
        } catch (error) {
          console.error("Chart OCR failed:", error);
          state.ocrStatusText = "OCR 辨識失敗，已保留一般顏色分析結果。";
        }

        if (runId !== state.analysisRunId) return;

        state.chartRecognition = chartRecognition;
        if (chartRecognition?.summary?.length) {
          state.previewInteractionMode = "cell";
          state.ocrStatusText = `已建立格子辨識圖層，成功整理 ${chartRecognition.summary.length} 種色號。`;
          const firstId = chartRecognition.summary[0]?.id;
          if (firstId && paletteById[firstId]) {
            setSimulatorFocus(buildSimulatorFocusFromPalette(paletteById[firstId]));
          } else {
            setSimulatorFocus(buildDefaultSimulatorFocus());
          }
        } else {
          state.previewInteractionMode = "pixel";
          state.ocrStatusText = "這張圖沒有建立出穩定的格子 / 色號層，已保留一般顏色分析結果。";
          const results = getDisplayedResults();
          if (results.length) {
            setSimulatorFocus(buildSimulatorFocusFromResult(results[0]));
          } else {
            setSimulatorFocus(buildDefaultSimulatorFocus());
          }
        }

        state.analysisDurationMs = performance.now() - startedAt;
        saveState();
        if (captureHistory) {
          await persistCurrentHistoryRecord();
        }
        renderAll();

        const results = getDisplayedResults();
        els.imageStatusText.textContent = chartRecognition?.summary?.length
          ? `分析完成：${state.imageName || "圖片"}。辨識到 ${chartRecognition.summary.length} 種色號，整理出 ${results.length} 筆結果。`
          : `分析完成：${state.imageName || "圖片"}。整理出 ${results.length} 筆結果。`;
        showToast(chartRecognition?.summary?.length
          ? `已完成分析，含 ${chartRecognition.summary.length} 種色號辨識`
          : `已完成分析，共 ${results.length} 筆顏色結果`);
      } finally {
        if (runId === state.analysisRunId) {
          state.isAnalyzing = false;
          renderAll();
        }
      }
    }

    function renderAll() {
      syncSettingsInputs();
      renderViews();
      renderPaletteBrowser();
      renderFavoritesStrip();
      renderRecentViews();
      renderPreviewModeControls();
      renderRecognitionResults();
      renderTop10();
      renderResults();
      renderOverviewMetrics();
      renderOverviewExportMeta();
      renderHistoryView();
      renderDetailDrawer();
      renderInfoModal();

      if (state.activeView === "overview") {
        renderPreview();
        renderHoverInspector();
        renderClickInspector();
        renderAnalysisSummary();
        renderTomodachiSimulator();
      } else if (state.activeView === "analysis") {
        renderAnalysisWorkspace();
      } else if (state.activeView === "palette") {
        renderPaletteInspector();
      }
    }

    function handleRootClick(event) {
      const target = event.target.closest("[data-action]");
      if (!target) return;
      const { action } = target.dataset;

      if (action === "switch-view") {
        setActiveView(target.dataset.view);
        renderAll();
        return;
      }
      if (action === "toggle-mobile-nav") {
        toggleMobileNav();
        return;
      }
      if (action === "close-mobile-nav") {
        toggleMobileNav(false);
        return;
      }
      if (action === "toggle-theme") {
        state.theme = getResolvedTheme() === "dark" ? "light" : "dark";
        applyTheme();
        saveState();
        renderAll();
        return;
      }
      if (action === "open-modal") {
        state.infoModal = target.dataset.modal === "about" ? "about" : "tutorial";
        renderInfoModal();
        return;
      }
      if (action === "close-modal") {
        state.infoModal = "";
        renderInfoModal();
        return;
      }
      if (action === "toggle-favorite") {
        toggleFavorite(target.dataset.id);
        return;
      }
      if (action === "open-history") {
        void openHistoryRecord(target.dataset.id);
        return;
      }
      if (action === "delete-history") {
        void deleteHistoryRecordAndRefresh(target.dataset.id);
        return;
      }
      if (action === "export-history") {
        exportHistoryRecord(target.dataset.id);
        return;
      }
      if (action === "export-json") {
        exportJson();
        return;
      }
      if (action === "export-csv") {
        exportCsv();
        return;
      }
      if (action === "export-swatches") {
        exportSwatches();
        return;
      }
      if (action === "copy-hex") {
        copyText(target.dataset.hex, `已複製 ${target.dataset.hex}`);
        return;
      }
      if (action === "open-palette") {
        openPaletteDetail(target.dataset.id);
        return;
      }
      if (action === "open-result") {
        openResultDetail(target.dataset.key);
        return;
      }
      if (action === "set-preview-mode") {
        const nextMode = target.dataset.mode === "cell" ? "cell" : "pixel";
        if (nextMode === "cell" && !state.chartRecognition?.cells?.length) {
          showToast("這張圖目前沒有可用的格子辨識結果");
        } else {
          state.previewInteractionMode = nextMode;
          state.hoverPixel = null;
          state.hoverCellKey = null;
          saveState();
          renderAll();
        }
        return;
      }
      if (action === "highlight-result") {
        const item = getDisplayedResults().find((result) => result.key === target.dataset.key);
        if (item) {
          state.activeResultKey = item.key;
          setSimulatorFocus(buildSimulatorFocusFromResult(item));
          renderAll();
        }
        return;
      }
      if (action === "apply-manual-override") {
        applyManualOverride();
        return;
      }
      if (action === "clear-manual-override") {
        clearManualOverride();
        return;
      }
      if (action === "apply-cell-manual-override") {
        applyCellManualOverride();
        return;
      }
      if (action === "clear-cell-manual-override") {
        clearCellManualOverride();
        return;
      }
      if (action === "set-pixel-focus-mode" && state.detail?.type === "pixel") {
        const mode = target.dataset.mode === "matched" ? "matched" : "raw";
        state.detail.item.displayMode = mode;
        setSimulatorFocus(buildSimulatorFocusFromPixel(state.detail.item, mode));
        renderAll();
      }
    }

    function bindEvents() {
      document.body.addEventListener("click", handleRootClick);

      els.imageInput.addEventListener("change", async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        try {
          await handleImageFile(file);
          setActiveView("overview");
        } catch (error) {
          console.error(error);
          showToast("圖片載入失敗，請再試一次");
        }
      });

      els.analyzeButton.addEventListener("click", async () => {
        await analyzeImage({ captureHistory: true });
      });

      els.resetButton.addEventListener("click", resetState);

      els.colorLimitSelect.addEventListener("change", (event) => {
        state.settings.colorLimitMode = event.target.value;
        els.customColorLimitInput.disabled = state.settings.colorLimitMode !== "custom";
        saveState();
        if (state.analysis) void analyzeImage({ captureHistory: false });
        renderAll();
      });

      els.customColorLimitInput.addEventListener("input", (event) => {
        state.settings.customColorLimit = clamp(parseInt(event.target.value, 10) || 16, 2, 128);
        saveState();
        syncSettingsInputs();
      });

      els.customColorLimitInput.addEventListener("change", () => {
        if (state.settings.colorLimitMode === "custom" && state.analysis) void analyzeImage({ captureHistory: false });
      });

      els.distanceMethodSelect.addEventListener("change", (event) => {
        state.settings.distanceMethod = event.target.value;
        saveState();
        if (state.analysis) void analyzeImage({ captureHistory: false });
        else renderAll();
      });

      els.ignoreTransparentCheckbox.addEventListener("change", (event) => {
        state.settings.ignoreTransparent = event.target.checked;
        saveState();
        if (state.analysis) void analyzeImage({ captureHistory: false });
      });

      els.mergeSimilarCheckbox.addEventListener("change", (event) => {
        state.settings.mergeSimilar = event.target.checked;
        saveState();
        if (state.analysis) void analyzeImage({ captureHistory: false });
      });

      els.analysisModeRadios.forEach((radio) => {
        radio.addEventListener("change", (event) => {
          if (!event.target.checked) return;
          state.settings.mode = event.target.value;
          state.activeResultKey = null;
          saveState();
          renderAll();
        });
      });

      els.zoomRange.addEventListener("input", (event) => {
        state.settings.zoom = clamp((parseInt(event.target.value, 10) || 100) / 100, 0.2, 5);
        els.zoomLabel.textContent = `${Math.round(state.settings.zoom * 100)}%`;
        renderPreview();
        saveState();
      });

      els.paletteSearchInput.addEventListener("input", (event) => {
        state.paletteSearch = event.target.value;
        renderPaletteBrowser();
        saveState();
      });

      els.paletteGroupFilter?.addEventListener("change", (event) => {
        state.paletteFilters.group = event.target.value;
        saveState();
        renderPaletteBrowser();
      });

      els.paletteToneFilter?.addEventListener("change", (event) => {
        state.paletteFilters.tone = event.target.value;
        saveState();
        renderPaletteBrowser();
      });

      els.paletteFavoritesOnlyCheckbox?.addEventListener("change", (event) => {
        state.paletteFilters.favoritesOnly = event.target.checked;
        saveState();
        renderPaletteBrowser();
      });

      els.historySearchInput?.addEventListener("input", (event) => {
        state.historyFilters.query = event.target.value;
        saveState();
        renderHistoryView();
      });

      els.historyFilterSelect?.addEventListener("change", (event) => {
        state.historyFilters.mode = event.target.value;
        saveState();
        renderHistoryView();
      });

      els.clearHistoryButton?.addEventListener("click", () => {
        void clearAllHistoryRecords();
      });

      els.settingsThemeSelect?.addEventListener("change", (event) => {
        state.theme = event.target.value;
        applyTheme();
        saveState();
        renderAll();
      });

      els.settingsColorLimitSelect?.addEventListener("change", (event) => {
        state.settings.colorLimitMode = event.target.value;
        saveState();
        syncSettingsInputs();
        if (state.analysis) void analyzeImage({ captureHistory: false });
      });

      els.settingsCustomColorLimitInput?.addEventListener("input", (event) => {
        state.settings.customColorLimit = clamp(parseInt(event.target.value, 10) || 16, 2, 128);
        saveState();
        syncSettingsInputs();
      });

      els.settingsDistanceMethodSelect?.addEventListener("change", (event) => {
        state.settings.distanceMethod = event.target.value;
        saveState();
        syncSettingsInputs();
        if (state.analysis) void analyzeImage({ captureHistory: false });
      });

      els.settingsIgnoreTransparentCheckbox?.addEventListener("change", (event) => {
        state.settings.ignoreTransparent = event.target.checked;
        saveState();
        syncSettingsInputs();
        if (state.analysis) void analyzeImage({ captureHistory: false });
      });

      els.settingsMergeSimilarCheckbox?.addEventListener("change", (event) => {
        state.settings.mergeSimilar = event.target.checked;
        saveState();
        syncSettingsInputs();
        if (state.analysis) void analyzeImage({ captureHistory: false });
      });

      els.settingsModeSelect?.addEventListener("change", (event) => {
        state.settings.mode = event.target.value;
        saveState();
        syncSettingsInputs();
        renderAll();
      });

      els.settingsHistoryFormatSelect?.addEventListener("change", (event) => {
        state.exportPrefs.historyFormat = event.target.value;
        saveState();
      });

      els.settingsIncludeSettingsCheckbox?.addEventListener("change", (event) => {
        state.exportPrefs.includeSettings = event.target.checked;
        saveState();
      });

      els.exportJsonButton.addEventListener("click", exportJson);
      els.exportCsvButton.addEventListener("click", exportCsv);
      els.exportSwatchesButton.addEventListener("click", exportSwatches);

      els.previewCanvas.addEventListener("mousemove", handlePreviewHover);
      els.previewCanvas.addEventListener("mouseleave", handlePreviewLeave);
      els.previewCanvas.addEventListener("click", handlePreviewClick);

      els.closeDrawerButton.addEventListener("click", closeDetailDrawer);
      els.closeInfoModalButton?.addEventListener("click", () => {
        state.infoModal = "";
        renderInfoModal();
      });
      els.infoModalOverlay?.addEventListener("click", (event) => {
        if (event.target === els.infoModalOverlay) {
          state.infoModal = "";
          renderInfoModal();
        }
      });
      els.detailOverlay.addEventListener("click", closeDetailDrawer);

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          state.infoModal = "";
          closeDetailDrawer();
          toggleMobileNav(false);
          renderInfoModal();
        }
      });

      window.addEventListener("resize", () => {
        if (state.activeView === "overview") {
          renderPreview();
        }
        if (state.activeView === "analysis") {
          renderAnalysisHeatmap();
        }
        if (state.activeView === "overview") {
          renderTomodachiSimulator();
        }
        if (state.activeView === "palette") {
          renderPaletteInspector();
        }
      });

      window.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener("change", () => {
        if (state.theme === "system") {
          applyTheme();
          renderAll();
        }
      });
    }

    async function init() {
      renderHeroBands();
      renderPaletteOptions();
      bindEvents();
      syncSettingsInputs();
      renderAll();
      await restoreState();
      await loadHistoryIntoState();
      renderAll();
    }

    init();
  
