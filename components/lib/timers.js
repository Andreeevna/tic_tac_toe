import { useEffect, useState } from 'react'

export function useNow(inderval, enabled) {
	const [now, setNow] = useState()

	useEffect(() => {
		if (!enabled) {
			setNow(undefined)
			return
		}

		const int = setInterval(() => {
			setNow(Date.now())
		}, inderval)

		return () => {
			clearInterval(int)
		}
	}, [inderval, enabled])

	return now
}
