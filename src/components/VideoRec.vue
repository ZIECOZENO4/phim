<template>
    <div class="fixed top-20 mt-5 left-0 w-[80vw] h-[40vh] flex justify-center">
    <button @click="startRecording" :disabled="isRecording">Start Video</button>
    <span v-if="isRecording">Recording...</span>
    <button @click="stopRecording" :disabled="!isRecording">Stop Video</button>
    <button @click="saveRecording" :disabled="!hasRecording">Save Video</button>
    <button @click="downloadRecording" :disabled="!hasRecording">Download Video</button>
    <video ref="video" autoplay></video>
    </div>
   </template>
   
   <script>
   export default {
    data() {
    return {
     mediaRecorder: null,
     recordedChunks: [],
     videoStream: null,
     isRecording: false,
     hasRecording: false,
    }
    },
    methods: {
    async startRecording() {
     this.videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
     this.$refs.video.srcObject = this.videoStream;
     this.mediaRecorder = new MediaRecorder(this.videoStream);
     this.mediaRecorder.ondataavailable = event => {
       this.recordedChunks.push(event.data);
       this.hasRecording = true;
     }
     this.mediaRecorder.start();
     this.isRecording = true;
    },
    stopRecording() {
     this.mediaRecorder.stop();
     this.isRecording = false;
    },
    saveRecording() {
     // Save the recording to local storage or database
    },
    createDownloadLink() {
     const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
     const url = URL.createObjectURL(blob);
     const link = document.createElement('a');
     link.href = url;
     link.download = 'output.webm';
     link.click();
    },
    downloadRecording() {
     this.createDownloadLink();
     this.hasRecording = false;
    }
    },
    beforeUnmount() {
    this.videoStream?.getTracks().forEach((track) => track.stop());
    },
   };
   </script>
   