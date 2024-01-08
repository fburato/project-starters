import { createContext, useContext, useEffect, useState } from "react";
import { RSocketClient, JsonSerializer, IdentitySerializer } from 'rsocket-core';
import { Encodable, ReactiveSocket } from "rsocket-types";
import RSocketWebSocketClient from 'rsocket-websocket-client';

const wsURL = 'ws://' + location.host + '/rs'; // eslint-disable-line no-restricted-globals

export type json =
    | string
    | number
    | boolean
    | null
    | json[]
    | { [key: string]: json };

interface RSocketClientState {
    ready: boolean,
    socket?: ReactiveSocket<json, Encodable> | undefined
}

export const RSocketContext = createContext<RSocketClientState>({ready: true})
export const RSocketProvider = ({children} : { children: React.ReactNode }) => {
    const [ready, setReady] = useState(false)
    const [socket, setSocket] = useState<ReactiveSocket<json, Encodable> | undefined>(undefined)
    const [attempt, setAttempt] = useState(0)

    useEffect(() => {
        console.log(wsURL)
        if(!ready) {
            const client: RSocketClient<json,Encodable> = new RSocketClient<json, Encodable>({
                serializers: {
                    data: JsonSerializer,
                    metadata: IdentitySerializer
                },
                setup: {
                    keepAlive: 60000,
                    lifetime: 180000,
                    dataMimeType: 'application/json',
                    metadataMimeType: 'message/x.rsocket.routing.v0',
                },
                transport: new RSocketWebSocketClient({
                    url: wsURL
                })
            });
            client.connect()
                .then(s => {
                    setSocket(s); 
                    setReady(true)
                }, e => {
                    console.error("Error encountered while connecting to websocket endpoints: %s. Retrying.", e)
                    setReady(false)
                    setAttempt(attempt + 1)
                })
        }
    }, [socket, ready, attempt])

    return (
        <RSocketContext.Provider value={{ready, socket}}>
            {children}
        </RSocketContext.Provider>
    )
}

export const useRSocket: () => RSocketClientState = () => useContext(RSocketContext)