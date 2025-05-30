<script setup lang="ts">
const isDialogOpen = ref(false);
const busy = ref(false);

const api = useRuntimeConfig().public.API_URL;

const name = ref("");

const openDialog = () => isDialogOpen.value = true;
const closeDialog = () => isDialogOpen.value = false;

async function onSubmit() {
	const syms: string[] = [];
	for (let i = 0; i < 57; i++) {
		syms.push((i + 1).toString());
	}

	const res = await $fetch(api + "session/create", {
		method: "POST",
		body: {
			sessionName: name.value.toString(),
			symbols: syms,
		},
	});

	const data: CreateSessionResponse = JSON.parse(res);

	navigateTo(`session/${data.id}`);
	closeDialog();
}
</script>

<template>
	<div>
		<article class="w-96 mx-auto" :aria-busy="busy">
			<header>Welcome to monomatch!</header>
			A simple, yet flexible symbol matching game.

			<footer class="flex flex-col gap-2">
				<button class="w-full" @click="openDialog">
					Create room
				</button>
				<button class="w-full">
					Join room
				</button>
			</footer>
		</article>
		<Transition>
			<dialog v-if="isDialogOpen" open>
				<form @submit.prevent="onSubmit">
					<article class="w-96">
						<header>Create room</header>

						<input v-model="name" v-focus type="text" placeholder="Session name">

						<select>
							<option selected disabled value="">
								Select preset...
							</option>
							<option value="bands">
								Metal Bands (57 Symbols)
							</option>
							<option value="custom">
								Custom
							</option>
						</select>
						<footer class="flex flex-col gap-2">
							<button class="w-full">
								Create
							</button>
							<button type="button" class="w-full" @click="closeDialog">
								Cancel
							</button>
						</footer>
					</article>
				</form>
			</dialog>
		</Transition>
	</div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
