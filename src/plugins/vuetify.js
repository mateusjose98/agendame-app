import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { PurpleTheme } from '@/theme/LightTheme';
import { VDateInput } from 'vuetify/labs/VDateInput'

export default createVuetify({
    components: { VDateInput, ...components },
    directives,

    theme: {
        defaultTheme: 'PurpleTheme',
        themes: {
            PurpleTheme,
        }
    },
    defaults: {

        VBtn: {},
        VCard: {
            rounded: 'md'
        },
        VTextField: {
            rounded: 'lg'
        },
        VTooltip: {
            // set v-tooltip default location to top
            location: 'top'
        }
    }
});
