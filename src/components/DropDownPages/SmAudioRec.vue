<template>
    <div class="fixed top-20 mt-5 left-0 w-[80vw] h-[50vh] flex justify-center pl-[20vw]">
        <div class="flex flex-col justify-center align-middle items-center">
            <img src="/images/vc.png" class="p-3 align-middle h-[40vh] w-[40vw]" />
            <div class="flex flex-row gap-5 justify-center align-middle">
         <span v-if="isRecording" class=" p-2 text-xl text-red-700 font-bold">Voice Recording...</span>
         <div v-if="isRecording" class=" pt-5 h-6 w-6 rounded-full bg-red-700"/>
            </div>
         
            <div class="bg-slate-400 rounded-xl bg-opacity-55 flex flex-row gap-14 p-3 pt-5">
    <button @click="startRecording" :disabled="isRecording">
        <svg width="60px" height="60px" viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>microphone</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> 
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-107.000000, -309.000000)" fill="#000000"> <path d="M118,333 C121.866,333 125,329.866 125,326 L125,316 C125,312.134 121.866,309 118,309 C114.134,309 111,312.134 111,316 L111,326 C111,329.866 114.134,333 118,333 L118,333 Z M129,328 L127,328 C126.089,332.007 122.282,335 118,335 C113.718,335 109.911,332.007 109,328 L107,328 C107.883,332.799 112.063,336.51 117,336.955 L117,339 L116,339 C115.448,339 115,339.448 115,340 C115,340.553 115.448,341 116,341 L120,341 C120.552,341 121,340.553 121,340 C121,339.448 120.552,339 120,339 L119,339 L119,336.955 C123.937,336.51 128.117,332.799 129,328 L129,328 Z" id="microphone" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
    </button>
  
     <button @click="stopRecording" :disabled="!isRecording">
        <svg width="60px" height="60px" viewBox="-3.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>microphone-off</title> 
            <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-156.000000, -309.000000)" fill="#000000"> <path d="M169,335 C167.061,335 165.236,334.362 163.716,333.318 L162.31,334.742 C163.944,335.953 165.892,336.765 168,336.955 L168,339 L167,339 C166.448,339 166,339.448 166,340 C166,340.553 166.448,341 167,341 L171,341 C171.552,341 172,340.553 172,340 C172,339.448 171.552,339 171,339 L170,339 L170,336.955 C174.938,336.51 179.117,332.799 180,328 L178,328 C177.089,332.007 173.282,335 169,335 L169,335 Z M176,326 L176,320.739 L164.735,331.515 C165.918,332.432 167.386,333 169,333 C172.866,333 176,329.866 176,326 L176,326 Z M160.047,328.145 L160,328 L158,328 C158.109,328.596 158.271,329.175 158.478,329.733 L160.047,328.145 L160.047,328.145 Z M179.577,312.013 L155.99,334.597 L157.418,336.005 L181.014,313.433 L179.577,312.013 L179.577,312.013 Z M169,309 C165.134,309 162,312.134 162,316 L161.997,326.309 L175.489,313.401 C174.456,310.825 171.946,309 169,309 L169,309 Z" id="microphone-off" sketch:type="MSShapeGroup"> 

        </path> </g> </g> </g></svg>
    </button>

     <button @click="downloadRecording" :disabled="!hasRecording">
        <svg width="60px" height="60px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-down-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -1087.000000)" fill="#000000"> <path d="M428,1117 C420.268,1117 414,1110.73 414,1103 C414,1095.27 420.268,1089 428,1089 C435.732,1089 442,1095.27 442,1103 C442,1110.73 435.732,1117 428,1117 L428,1117 Z M428,1087 C419.163,1087 412,1094.16 412,1103 C412,1111.84 419.163,1119 428,1119 C436.837,1119 444,1111.84 444,1103 C444,1094.16 436.837,1087 428,1087 L428,1087 Z M433.121,1102.46 L429,1106.59 L429,1096 C429,1095.45 428.553,1095 428,1095 C427.448,1095 427,1095.45 427,1096 L427,1106.59 L422.879,1102.46 C422.488,1102.07 421.855,1102.07 421.465,1102.46 C421.074,1102.86 421.074,1103.49 421.465,1103.88 L427.121,1109.54 C427.361,1109.78 427.689,1109.85 428,1109.79 C428.311,1109.85 428.639,1109.78 428.879,1109.54 L434.535,1103.88 C434.926,1103.49 434.926,1102.86 434.535,1102.46 C434.146,1102.07 433.512,1102.07 433.121,1102.46 L433.121,1102.46 Z" id="arrow-down-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
    </button>
            </div>
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
   