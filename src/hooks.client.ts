// src/hooks.client.ts
import { init, getLocaleFromNavigator } from "svelte-i18n";

// This runs before your UI renders on the client
init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});
