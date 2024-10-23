<script lang="ts">
	import { page } from '$app/stores';
	import { DateInput, DatePicker } from 'date-picker-svelte';
	import { DateTime, Settings } from 'luxon';
	import { Icon } from 'svelte-icons-pack';
	import { FiCopy } from "svelte-icons-pack/fi";

	Settings.throwOnInvalid = true;

	let date: Date | null = null;
	let seconds: number | null = null;
	let milliseconds: number | null = null;
	let permalink: string | null = null;
	let lastUpdated: 'date' | 'seconds' | 'milliseconds' | null = null;

	// Try parse the date, seconds or milliseconds from query parameters: d, s, ms
	if (!parseQueryParameters()) {
		date = new Date();
		lastUpdated = 'date';
	}
	// Reactive statements
	$: if (date !== null && lastUpdated === 'date') calculateFromDate();
	$: if (seconds !== null && lastUpdated === 'seconds') calculateFromSeconds();
	$: if (milliseconds !== null && lastUpdated === 'milliseconds') calculateFromMilliseconds();

	function calculateFromDate() {
		seconds = Math.floor(date!.getTime() / 1000);
		milliseconds = date!.getTime();

		permalink = $page.url.origin + $page.url.pathname + '?d=' + date!.toISOString();
	}

	function calculateFromSeconds() {
		date = new Date(seconds! * 1000);
		milliseconds = date.getTime();

		permalink = $page.url.origin + $page.url.pathname + '?s=' + seconds;
	}

	function calculateFromMilliseconds() {
		date = new Date(milliseconds!);
		seconds = Math.floor(milliseconds! / 1000);

		permalink = $page.url.origin + $page.url.pathname + '?ms=' + milliseconds;
	}

	function parseQueryParameters() {
		if ($page.url.searchParams.has('d')) {
			try {
				date = DateTime.fromFormat($page.url.searchParams.get('d')!, "yyyy-MM-dd'T'HH:mm:ss.SSS").toJSDate();
				lastUpdated = 'date';
				return true;
			} catch {}

			try {
				date = DateTime.fromFormat($page.url.searchParams.get('d')!, "yyyy-MM-dd' 'HH:mm:ss.SSS").toJSDate();
				lastUpdated = 'date';
				return true;
			} catch {}

			try {
				date = DateTime.fromISO($page.url.searchParams.get('d')!).toJSDate();
				lastUpdated = 'date';
				return true;
			} catch {}

			try {
				date = DateTime.fromRFC2822($page.url.searchParams.get('d')!).toJSDate();
				lastUpdated = 'date';
				return true;
			} catch {}

			try {
				date = DateTime.fromHTTP($page.url.searchParams.get('d')!).toJSDate();
				lastUpdated = 'date';
				return true;
			} catch {}

			try {
				date = DateTime.fromSQL($page.url.searchParams.get('d')!).toJSDate();
				lastUpdated = 'date';
				return true;
			} catch {}
		}

		if ($page.url.searchParams.has('s')) {
			try {
				const tempSeconds = parseInt($page.url.searchParams.get('s')!);
				if (isNaN(tempSeconds)) throw new Error('Invalid number');

				seconds = tempSeconds;
				lastUpdated = 'seconds';
				return true;
			} catch {}
		}
		if ($page.url.searchParams.has('ms')) {
			try {
				const tempMilliseconds = parseInt($page.url.searchParams.get('ms')!);
				if (isNaN(tempMilliseconds)) throw new Error('Invalid number');

				milliseconds = tempMilliseconds;
				lastUpdated = 'milliseconds';
				return true;
			} catch {}
		}

		return false;
	}
</script>

<svelte:head>
	<title>Timestamps</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center my-20">
	<div class="space-y-8">
		<img src="./logo-200h.png" alt="logo" class="mx-auto max-h-32" />
		<p class="text-center">Easily convert timestamps to different formats.</p>
		<div>
			<label>
				Date
				<DateInput id="date-input" bind:value={date} timePrecision="millisecond" format="yyyy-MM-dd HH:mm:ss" on:select={() => lastUpdated = 'date'} />
			</label>
		</div>
		<div>
			<label>
				Seconds
				<input id="seconds-input" type="number" class="input" name="seconds" min="0" bind:value={seconds} on:input={() => lastUpdated = 'seconds'} />
			</label>
		</div>
		<div>
			<label>
				Milliseconds
				<input id="milliseconds-input" type="number" class="input" name="milliseconds" min="0" bind:value={milliseconds} on:input={() => lastUpdated = 'milliseconds'} />
			</label>
		</div>
		<div class="flex items-center justify-center">
			<a href={permalink} class="text-sm underline">{permalink}</a>
			<button class="btn-icon bg-initial" on:click={() => navigator.clipboard.writeText(permalink ?? "")}><Icon src={FiCopy}/></button>
		</div>
	</div>
</div>
