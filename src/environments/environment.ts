// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASE_URL: 'http://localhost:4200/',
  BASE_API_URL: 'http://localhost:3000/api/',
  ESMS:{
    BRAND_NAME:'Baotrixemay',
    SMS_TYPE: 2,
    API_KEY: '6F7EAA6E8F1FFF514ADC5159111C7F',
    SECRET_KEY: '157B96C2B68E065F8471637604217B'
  }
};
