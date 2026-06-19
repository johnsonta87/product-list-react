import { useEffect, useState } from 'react'

interface UserSettings {
    theme: string
    notifications: boolean[]
}

// this would probably be calling api where we would be passing user id param here
export default function useUserSettings(): {
    settings: UserSettings;
    setSettings: (settings: UserSettings) => void,
    lastNotificationCount: number,
} {
    const [settings, setSettings] = useState<UserSettings>({
        theme: 'light', // probably not needed here but i'll let this be
        notifications: [true, false, true] // probably shoud be coming from api so this is hardcoded for now? hence the local state reactivity below
    })
    // new var that calls on what notifs are true
    const notificationsCountOn = settings.notifications.filter(n => n).length;
    const [lastNotificationCount, setLastNotificationCount] = useState(notificationsCountOn) // instead of 0, casted the reactive count to default here

    useEffect(() => {
        setLastNotificationCount(notificationsCountOn)
    }, [settings.notifications, notificationsCountOn]) // should be tracking what notifs are true

    return {
        settings,
        setSettings,
        lastNotificationCount,
    }
}