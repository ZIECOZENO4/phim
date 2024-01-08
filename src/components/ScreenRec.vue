<template>
      <div class="fixed top-20 mt-5 left-0 w-[80vw] h-[60vh] flex justify-center pl-[20vw]">
        <div class="flex flex-col justify-center align-middle items-center">
            <img v-if="Recording" src="/images/sr.png" class="p-3 align-middle h-[40vh] w-[40vw]" />
            <div class="flex flex-row gap-5 justify-center align-middle">
         <span v-if="isRecording" class=" p-2 text-xl text-red-700 font-bold">Screen Recording...</span>
         <div v-if="isRecording" class=" pt-5 h-6 w-6 rounded-full bg-red-700"/>
            </div>
            <div class="bg-white w-auto  rounded-xl bg-opacity-55 flex flex-row gap-14 p-3 pt-5">
                <button @click="startRecording" :disabled="isRecording">
                    <svg width="60px" height="60px" viewBox="0 0 50.8 50.8" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" stroke="#010000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.175"> <path d="M19.844 7.938H7.938v11.905m0 11.113v11.906h11.905m23.019-11.906v11.906H30.956m11.906-23.018V7.938H30.956"></path> <circle cx="25.4" cy="25.4" r="8.731"></circle> </g> </g></svg>
                </button>
   
    <button @click="stopRecording" :disabled="!isRecording">
        <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.65 6H12.8C13.9201 6 14.4802 6 14.908 6.21799C15.2843 6.40973 15.5903 6.71569 15.782 7.09202C16 7.51984 16 8.0799 16 9.2V10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 14.679 21 15.0462 20.9684 15.3184M3 3L6.00005 6.00005M21 21L15.9819 15.9819M6.00005 6.00005C5.01167 6.00082 4.49359 6.01337 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C15.9049 16.6668 15.9585 16.3837 15.9819 15.9819M6.00005 6.00005L15.9819 15.9819" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </button>

    <button @click="saveRecording" :disabled="!hasRecording">
        <svg fill="#000000" width="60px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M3,21 C1.8954305,21 1,20.1045695 1,19 L1,5 C1,3.8954305 1.8954305,3 3,3 L21,3 C22.1045695,3 23,3.8954305 23,5 L23,19 C23,20.1045695 22.1045695,21 21,21 L3,21 Z M21,5 L3,5 L3,19 L21,19 L21,5 Z M9.1843164,7.78768371 C9.67333621,7.30584332 10.2804658,7 11,7 L13,7 C13.7195342,7 14.3266638,7.30584332 14.8156836,7.78768371 C14.8879867,7.85892532 14.9541108,7.93005667 15.0143026,8 L15.6,8 C16.9414906,8 18,9.13411721 18,10.5 L18,14.5 C18,15.8658828 16.9414906,17 15.6,17 L8.4,17 C7.05850939,17 6,15.8658828 6,14.5 L6,10.5 C6,9.13411721 7.05850939,8 8.4,8 L8.98569742,8 C9.0458892,7.93005667 9.11201328,7.85892532 9.1843164,7.78768371 Z M11,9 C10.8706092,9 10.7333263,9.06915668 10.5880336,9.21231629 C10.4804087,9.31836108 10.405992,9.42597745 10.383646,9.46815566 L10.1018749,10 L8.4,10 C8.19509331,10 8,10.2090285 8,10.5 L8,14.5 C8,14.7909715 8.19509331,15 8.4,15 L15.6,15 C15.8049067,15 16,14.7909715 16,14.5 L16,10.5 C16,10.2090285 15.8049067,10 15.6,10 L13.8981251,10 L13.616354,9.46815566 C13.594008,9.42597745 13.5195913,9.31836108 13.4119664,9.21231629 C13.2666737,9.06915668 13.1293908,9 13,9 L11,9 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z"></path> </g></svg>
    </button>
    <button @click="downloadRecording" :disabled="!hasRecording">
        <svg width="60px" height="60px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-down-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -1087.000000)" fill="#000000"> <path d="M428,1117 C420.268,1117 414,1110.73 414,1103 C414,1095.27 420.268,1089 428,1089 C435.732,1089 442,1095.27 442,1103 C442,1110.73 435.732,1117 428,1117 L428,1117 Z M428,1087 C419.163,1087 412,1094.16 412,1103 C412,1111.84 419.163,1119 428,1119 C436.837,1119 444,1111.84 444,1103 C444,1094.16 436.837,1087 428,1087 L428,1087 Z M433.121,1102.46 L429,1106.59 L429,1096 C429,1095.45 428.553,1095 428,1095 C427.448,1095 427,1095.45 427,1096 L427,1106.59 L422.879,1102.46 C422.488,1102.07 421.855,1102.07 421.465,1102.46 C421.074,1102.86 421.074,1103.49 421.465,1103.88 L427.121,1109.54 C427.361,1109.78 427.689,1109.85 428,1109.79 C428.311,1109.85 428.639,1109.78 428.879,1109.54 L434.535,1103.88 C434.926,1103.49 434.926,1102.86 434.535,1102.46 C434.146,1102.07 433.512,1102.07 433.121,1102.46 L433.121,1102.46 Z" id="arrow-down-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
    </button>
            </div>
 
    <video ref="video" autoplay></video>
    </div>
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
     Recording: true,
    }
    },
    methods: {
    async startRecording() {
    this.videoStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    this.$refs.video.srcObject = this.videoStream;
    this.mediaRecorder = new MediaRecorder(this.videoStream);
    this.mediaRecorder.ondataavailable = event => {
      this.recordedChunks.push(event.data);
      this.hasRecording = true;
    }
    this.mediaRecorder.start();
    this.isRecording = true;
    this.isRecording = true;
    },
    stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = false;
    this.isRecording = true;
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
   