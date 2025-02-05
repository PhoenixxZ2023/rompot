import { IAudioMessage, IChat, Media, MessageType } from "rompot-base";

import MediaMessage from "@messages/MediaMessage";

import { injectJSON } from "@utils/Generic";

export default class AudioMessage extends MediaMessage implements IAudioMessage {
  public readonly type = MessageType.Audio;

  public mimetype: string = "audio/mp4";

  constructor(chat: IChat | string, file: Media | Buffer | string, others: Partial<AudioMessage> = {}) {
    super(chat, "", file);

    injectJSON(others, this);
  }

  /**
   * @returns Obter audio
   */
  public getAudio() {
    return this.getStream();
  }
}
