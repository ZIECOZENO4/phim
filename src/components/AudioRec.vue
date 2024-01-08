<template>
    <div class="fixed top-20 mt-5 left-0 w-[80vw] h-[40vh] flex justify-center">
        <div class="flex ">
            <button @click="startRecording" :disabled="isRecording">Start Recording</button>
     <span v-if="isRecording">Recording...</span>
     <button @click="stopRecording" :disabled="!isRecording">Stop Recording</button>
     <button @click="downloadRecording" :disabled="!hasRecording">Download</button>
        </div>

    </div>
   </template>
   
   <script>
   export default {
    data() {
     return {
       mediaRecorder: null,
       recordedChunks: [],
       isRecording: false,
       hasRecording: false,
     }
    },
    methods: {
     async startRecording() {
       const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
       this.mediaRecorder = new MediaRecorder(stream)
       this.mediaRecorder.ondataavailable = event => {
         this.recordedChunks.push(event.data)
         this.hasRecording = true
       }
       this.mediaRecorder.start()
       this.isRecording = true
     },
     stopRecording() {
       this.mediaRecorder.stop()
       this.isRecording = false
     },
     createDownloadLink() {
       const blob = new Blob(this.recordedChunks, { type: 'audio/wav' })
       const url = URL.createObjectURL(blob)
       const link = document.createElement('a')
       link.href = url
       link.download = 'output.wav'
       link.click()
     },
     downloadRecording() {
       this.createDownloadLink()
       this.hasRecording = false
     }
    }
   }
   </script>
   