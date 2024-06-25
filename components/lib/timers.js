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

export function useInterval(interval, enabled, cb) {
	useEffect(() => {
		if (!enabled) {
			return
		}

		const int = setInterval(() => {
			console.log('interval')
			cb(Date.now())
		}, interval)

		return () => {
			clearInterval(int)
		}

		// TODO useCallback
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [interval, enabled])
}
