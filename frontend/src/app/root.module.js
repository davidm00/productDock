angular
    .module('root', [
    'ngMaterial',
    'common',
    'components',
    'templates'
  ])
    .config(function ($mdThemingProvider) {
        var color1 = {
            '50': '#757575',
            '100': '#686868',
            '200': '#5b5b5b',
            '300': '#4e4e4e',
            '400': '#424242',
            '500': '#353535',
            '600': '#282828',
            '700': '#1b1b1b',
            '800': '#0f0f0f',
            '900': '#020202',
            'A100': '#818181',
            'A200': '#8e8e8e',
            'A400': '#9b9b9b',
            'A700': '#000000'
        };
        $mdThemingProvider
            .definePalette('color1',
                color1);

        var color2 = {
            '50': '#020507',
            '100': '#08121a',
            '200': '#0e1f2e',
            '300': '#142c41',
            '400': '#1a3a55',
            '500': '#204768',
            '600': '#2c618f',
            '700': '#326ea3',
            '800': '#387cb7',
            '900': '#4389c5',
            'A100': '#2c618f',
            'A200': '#26547C',
            'A400': '#204768',
            'A700': '#5695cb'
        };
        $mdThemingProvider
            .definePalette('color2',
                color2);

        var color3 = {
            '50': '#eac7c3',
            '100': '#e3b6b0',
            '200': '#dda49d',
            '300': '#d6938a',
            '400': '#d08177',
            '500': '#C97064',
            '600': '#c25f51',
            '700': '#b94f41',
            '800': '#a6473a',
            '900': '#943f33',
            'A100': '#f1d9d5',
            'A200': '#f7eae8',
            'A400': '#fefcfb',
            'A700': '#81372d'
        };
        $mdThemingProvider
            .definePalette('color3',
                color3);

        var color4 = {
            '50': '#d6d1cb',
            '100': '#cbc4bd',
            '200': '#c0b7af',
            '300': '#b4aaa1',
            '400': '#a99e92',
            '500': '#9E9184',
            '600': '#938476',
            '700': '#867769',
            '800': '#776b5e',
            '900': '#695e53',
            'A100': '#e1ddda',
            'A200': '#edeae8',
            'A400': '#f8f7f6',
            'A700': '#5b5148'
        };
        $mdThemingProvider
            .definePalette('color4',
                color4);

        $mdThemingProvider.theme('default')
            .primaryPalette('color1')
            .accentPalette('color2')
            .warnPalette('color3')
            .backgroundPalette('color4')
    });
