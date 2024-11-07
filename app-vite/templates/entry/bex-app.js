import { BexBridge } from '@quasar/app-vite/bex/private/bex-bridge.js'

const bridge = window.QBexBridge = new BexBridge({ type: 'app' })

export const bex = {
  bridge,
  promise: bridge.connectToBackground().catch(() => {})
}
