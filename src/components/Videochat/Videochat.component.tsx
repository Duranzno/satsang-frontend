import React from 'react'
import { JitsiOptions, JitsiValues } from '../../../types/react-jutsu';
import { useJitsi } from 'react-jutsu'

interface Props {
  room: string

}
export const Videochat: React.FC<Props> = ({ room: roomName }) => {
  const jitsiConfig: JitsiOptions = {
    roomName,
    // subject: 'fan',
    parentNode: 'jitsi-container',
  };
  const jitsiValues: JitsiValues = useJitsi(jitsiConfig);
  const { error } = jitsiValues
  return (
    <div>
      {error && <p>{error}</p>}
      <div id={jitsiConfig.parentNode} />
    </div>
  );

}

