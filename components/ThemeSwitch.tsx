'use client'

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";



export function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    if (theme == 'dark') {
        return <Image alt="sun" width={30} height={30} src="/sun.png" onClick={() => setTheme('light')}></Image>
    }
    if (theme == 'light') {
        return <Image alt="moon" width={30} height={30} src="/moon.png" onClick={() => setTheme('dark')}></Image>
    }
}