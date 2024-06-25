/**
 * 
 * @param {string | undefined} name The page title
 * @returns {string}
 */
export function title(name?: string): string {
    const { title } = useAppConfig()
    if (!name) {
        return `${title}`
    }
    return `${name} - ${title}`
}

/**
 * Might do certain stuff to the description.
 * 
 * Currently a no-op but should be used for `useSeoMeta` and `useSeoServerMeta` descriptions
 * 
 * @param text The description that is rendered
 * @returns {string} The completed description
 */
export function description(text?: string): string {
    if (!text) {
        return "A Todo app that works"
    }
    return text;
}
