declare module 'react-jutsu'

export const useJitsi = (params: { options: JitsiOptions }) => JitsiValues
export interface JitsiValues {
  loading: boolean,
  client?: JitsiClient,
  error?: string
}
export interface JitsiClient {
  captureLargeVideoScreenshot: Promise<string>,
  getAvailableDevices: Promise<object[]>,
  getCurrentDevices: Promise<object[]>,
  getParticipantsInfo
  getVideoQuality
  isDeviceChangeAvailable: boolean,
  isDeviceListAvailable: boolean,
  isMultipleAudioInputSupported: boolean,
  pinParticipant: (id: number) => void,
  resizeLargeVideo: (width: number, height: number) => void,
  setAudioInputDevice: (deviceLabel: string, deviceId: string) => void,
  setAudioOutputDevice: (deviceLabel: string, deviceId: string) => void,
  setLargeVideoParticipant: (participantId: string) => void,
  setVideoInputDevice: (deviceLabel: number, deviceId: number) => void,
  startRecording: (options: object) => void,
  startRecording: (mode: number) => void,
  executeCommand: (command: string, ...arguments: unknown[]) => void,

}
export interface JitsiOptions {
  roomName: string,
  domain?: string,
  subject?: string,
  password?: string,
  displayName?: string,
  onMeetingEnd?: func,
  width?: string,
  height?: string,
  parentNode?: string,
  configOverwrite?: object,
  interfaceConfigOverwrite?: object,
  noSSL?: bool,
  jwt?: string,
  onload?: func,
  invitees?: array,
  devices?: object,
  userInfo?: object
}