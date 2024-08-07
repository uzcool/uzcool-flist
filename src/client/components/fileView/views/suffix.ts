import {type Component, defineAsyncComponent} from "vue";
import {PageFileData} from "../../../../type/index.js";
import LoadError from "./LoadError.vue";
import Loading from "./Loading.vue";
export type ViewComponent = {
    component:Component<{file:PageFileData}>,
    name:string
};

function defineViewComponent(name:string,f:()=>Promise<Component>):ViewComponent{
    return {
        component:defineAsyncComponent({
            errorComponent:LoadError,
            loadingComponent:Loading,
            loader:f
        }),
        name:name
    }
}
const GenericFileDown = defineViewComponent("文件下载",()=>import("./GenericFileDown.vue"));
const VideoPlayer = defineViewComponent("视频播放",()=>import("./VideoPlayer.vue"))
const MusicPlayer = defineViewComponent("音乐播放",()=>import("./MusicPlayer.vue"));
const MarkdownPlayer = defineViewComponent("Markdown预览",()=>import("./MarkdownPlayer.vue"));
const ImgPlayer = defineViewComponent("图片预览",()=>import("./ImgPlayer.vue"));
const PDFPlayer = defineViewComponent("PDF预览",()=>import("./PDFPlayer.vue"));
const PreTextPlayer = defineViewComponent("文本预览",()=>import("./PreTextPlayer.vue"));
const fileTypesSuffixConfig:[string[],ViewComponent[]][] = [
    [[".mp4",".mkv",".webm",".m3u8",".ts",".avi",".mov",".wmv",".flv"],[VideoPlayer]],
    [[".mp3",".flac",".wav"],[MusicPlayer]],
    [[".md"],[MarkdownPlayer]],
    [[".jpg",".jpeg",".png",".gif",".bmp",".webp",".svg",".ico",".tiff",],[ImgPlayer]],
    [[".pdf"],[PDFPlayer]],
    [[".txt",".text",".md"],[PreTextPlayer]],
]

const fileTypesSuffix: {[suffix: string]: ViewComponent[]} = {};
for (const ar of fileTypesSuffixConfig) {
    for (const k of ar[0]) {
        if (!fileTypesSuffix[k]) {
            fileTypesSuffix[k] = [];
        }
        fileTypesSuffix[k].push(...ar[1]);
    }
}
// 去重
for (const k in fileTypesSuffix) {
    fileTypesSuffix[k] = [...new Set(fileTypesSuffix[k])];
}

export function getViewBySuffix(suffix: string):ViewComponent[] {
    const com = fileTypesSuffix[suffix.toLowerCase()];
    if(com){
        return [GenericFileDown,...com]
    }
    return [GenericFileDown];
}