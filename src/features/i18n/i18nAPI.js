import { langUrl } from './i18nConfig';

export function fetchTranslations(lang) {
    return new Promise((resolve, reject) => {
        fetch(langUrl.replace('{lang}', lang))
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((e) => reject(e));
    });
}
