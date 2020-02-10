/* @flow */
import type {WindowName} from "../../tron/windowManager"
import type {WindowParams} from "../../tron/window"
import type {WindowsRedirectMsg} from "../types"

export default {
  redirect(name: WindowName, params: WindowParams): WindowsRedirectMsg {
    return {
      channel: "windows:redirect",
      name,
      params
    }
  }
}
