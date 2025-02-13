export async function script ({ scope, utils }) {
  await utils.prompts(scope, [
    utils.commonPrompts.scriptType
  ])

  const { script } = await import(`./quasar-v2/index.js`)
  await script({ scope, utils })
}
