export const createActionType = (name: string, actionType: string): string =>
    `${name}/${actionType}`
export default { createActionType }
