/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SupremeVariable: 'Supreme-Variable',
        SupremeVariableItalic: 'Supreme-VariableItalic',
        SupremeThin: 'Supreme-Thin',
        SupremeThinItalic: 'Supreme-ThinItalic',
        SupremeExtralight: 'Supreme-Extralight',
        SupremeExtralightItalic: 'Supreme-ExtralightItalic',
        SupremeLight: 'Supreme-Light',
        SupremeLightItalic: 'Supreme-LightItalic',
        SupremeRegular: 'Supreme-Regular',
        SupremeItalic: 'Supreme-Italic',
        SupremeMedium: 'Supreme-Medium',
        SupremeMediumItalic: 'Supreme-MediumItalic',
        SupremeBold: 'Supreme-Bold',
        SupremeBoldItalic: 'Supreme-BoldItalic',
        SupremeExtrabold: 'Supreme-Extrabold',
        SupremeExtraboldItalic: 'Supreme-ExtraboldItalic',
        ErodeVariable: 'Erode-Variable',
        ErodeVariableItalic: 'Erode-VariableItalic',
        ErodeLight: 'Erode-Light',
        ErodeLightItalic: 'Erode-LightItalic',
        ErodeRegular: 'Erode-Regular',
        ErodeItalic: 'Erode-Italic',
        ErodeMedium: 'Erode-Medium',
        ErodeMediumItalic: 'Erode-MediumItalic',
        ErodeSemibold: 'Erode-Semibold',
        ErodeSemiboldItalic: 'Erode-SemiboldItalic',
        ErodeBold: 'Erode-Bold',
        ErodeBoldItalic: 'Erode-BoldItalic',
      }
    },
    gridTemplateColumns:{
      gridFluid: 'repeat(auto-fill, minmax(300px, 1fr))',
    }
  },
  plugins: [],
}

