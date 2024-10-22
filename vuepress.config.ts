import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { FileList } from './src/node/index.js'
import { githubReleasesFilesAnalysis } from "./src/node/analysis/githubReleasesFilesAnalysis/index.js";
import { cloudflarePagesDownProxy } from "./src/node/proxy/cloudflarePagesDownProxy/index.js";
import { fileUrlTreeAnalysis } from "./src/node/analysis/fileUrlTreeAnalysis/index.js";
import { huggingFaceDatasetsAnalysis } from "./src/node/analysis/huggingFaceDatasetsAnalysis/index.js";
import { vercelDownProxy } from './src/node/proxy/vercelDownProxy/index.js';
import { netlifyDownProxy } from './src/node/proxy/netlifyDownProxy/index.js';
import { giteeReleasesFilesAnalysis } from './src/node/analysis/giteeReleasesFilesAnalysis/index.js';
import { githubReposAnalysis } from './src/node/analysis/githubReposAnalysis/index.js';
import { giteeReposAnalysis } from './src/node/analysis/giteeReposAnalysis/index.js';


/**
 * 站点配置文件，没有注释的选项如果不知道有什么作用不建议修改，有注释的选项可以根据注释修改
 * */
export default defineUserConfig({
  bundler: viteBundler(),
  pagePatterns: [],
  lang: 'zh-CN',
  public: `./public`,
  // 网站标题，标题颜色可在 src/client/css/main.css 中修改
  title: 'FList',
  // 网站的简介，有助于搜索引擎收录
  description: '',
  // 页面 <head> 标签内添加的额外标签。 不要修改/logo.png可以替换掉这个文件，删除logo.png会导致构建出错。
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  // 页面预加载，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。
  // 简单来说就是，如果你的文件不多就可以打开这个选项，可以大大提高页面切换的速度，如果文件非常多就不建议打开。建议超过100个文件就不要打开这个选项。
  shouldPrefetch: true,
  // 主题配置 FileList 是 vuepress 的一个主题，文件展示的功能全部由这个主题提供。
  theme: FileList([
    /*{
      // 挂载路径
      mountPath: "/KnapsackToGo4下载",
      // 文件解析器，这里使用githubReleasesFilesAnalysis,可以解析github的release文件
      analysis: githubReleasesFilesAnalysis({
        // 仓库所有者的用户名
        user: "jianjianai",
        // 仓库所有者的仓库名
        repository: "KnapsackToGo4"
      }),
    },
    {
      mountPath: "/",
      analysis: githubReleasesFilesAnalysis({ user: "jianjianai", repository: "FList" }),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: cloudflarePagesDownProxy(),
    },
    {
      mountPath: "/",
      // 这里使用 fileUrlTreeAnalysis 文件放到对应的文件路径中
      analysis: fileUrlTreeAnalysis({
        "/test2/文件树-测试视频1.mp4": "https://github.com/jianjianai/FList/releases/download/root/test.video.2.1080p.webm",
        "/文件树测试/文件树-测试视频1.mp4": "https://github.com/jianjianai/FList/releases/download/root/test.video.2.1080p.webm",
        "/文件树-测试视频1.mp4": "https://github.com/jianjianai/FList/releases/download/root/test.video.2.1080p.webm"
      }),
      downProxy: cloudflarePagesDownProxy(),//如果文件树地址下载比较慢，也可以配置代理
    },
    {
      mountPath: "/huggingface测试",
      analysis: huggingFaceDatasetsAnalysis({
        userName: "Open-Orca",
        datasetsName: "OpenOrca",
        branchName: "main",
        path: "/",
        //最大深度,如果文件夹有很多层最大递归解析多少层，默认10
        maxDeep: 3
      }),
    },
    {
      mountPath: "/gitee测试/发行版",
      analysis: giteeReleasesFilesAnalysis({
        user: "jja8",
        repository: "flist-test",
        direction: "desc"
      })
    },
    {
      mountPath: "/gitee测试/仓库",
      analysis: giteeReposAnalysis({
        user: "jja8",
        repository: "flist-test"
      }),
    },
    {
      mountPath: "/ProgrammingVTuberLogos",
      analysis: githubReposAnalysis({
        user: "Aikoyori",
        repository: "ProgrammingVTuberLogos",
      }),
      downProxy: cloudflarePagesDownProxy()
    }，*/
    // ... 可以配置多个挂载路径和仓库，以此类推
	//代理软件
    {
      mountPath: "/GitHub/代理软件/GUI.for.Clash",
      analysis: githubReleasesFilesAnalysis({ user: "GUI-for-Cores", repository: "GUI.for.Clash" }),
      downProxy: cloudflarePagesDownProxy(),
    },
    {
      mountPath: "/GitHub/代理软件/GUI.for.SingBox",
      analysis: githubReleasesFilesAnalysis({ user: "GUI-for-Cores", repository: "GUI.for.SingBox" }),
      downProxy: cloudflarePagesDownProxy(),
    },
    {
      mountPath: "/GitHub/代理软件/karing",
      analysis: githubReleasesFilesAnalysis({ user: "KaringX", repository: "karing" }),
      downProxy: cloudflarePagesDownProxy(),
    },
	//AI软件
	{
      mountPath: "/GitHub/AI/IOPaint--AI图片修复",
      analysis: githubReleasesFilesAnalysis({ user: "Sanster", repository: "IOPaint" }),
      downProxy: cloudflarePagesDownProxy(),
    },
	{
      mountPath: "/GitHub/AI/Fooocus--AI图片生成",
      analysis: githubReleasesFilesAnalysis({ user: "lllyasviel", repository: "Fooocus" }),
      downProxy: cloudflarePagesDownProxy(),
    },
    {
      mountPath: "/GitHub/AI/CodeFormer--AI图片面部修复",
      analysis: githubReleasesFilesAnalysis({ user: "sczhou", repository: "CodeFormer" }),
      downProxy: cloudflarePagesDownProxy(),
    },
	{
      mountPath: "/GitHub/AI/pyvideotrans--AI视频翻译配音",
      analysis: githubReleasesFilesAnalysis({ user: "jianchang512", repository: "pyvideotrans" }),
      downProxy: cloudflarePagesDownProxy(),
    },



    {
      mountPath: "/TopWar历史版本",
      analysis: fileUrlTreeAnalysis({
        "/release4002.zip":"https://topwarhistory.puter.site/release4002.zip",
        "/release4017.zip":"https://topwarhistory.puter.site/release4017.zip",
        "/release4020.zip":"https://topwarhistory.puter.site/release4020.zip",
        "/release4021.zip":"https://topwarhistory.puter.site/release4021.zip",
        "/release4022.zip":"https://topwarhistory.puter.site/release4022.zip",
        "/release4023.zip":"https://topwarhistory.puter.site/release4023.zip",
        "/release4030.zip":"https://topwarhistory.puter.site/release4030.zip",
        "/release4031.zip":"https://topwarhistory.puter.site/release4031.zip",
        "/release4032.zip":"https://topwarhistory.puter.site/release4032.zip",
        "/release4033.zip":"https://topwarhistory.puter.site/release4033.zip",
        "/release4035.zip":"https://topwarhistory.puter.site/release4035.zip",
        "/release4037.zip":"https://topwarhistory.puter.site/release4037.zip",
        "/release4038.zip":"https://topwarhistory.puter.site/release4038.zip",
        "/release4041.zip":"https://topwarhistory.puter.site/release4041.zip",
        "/release4050.zip":"https://topwarhistory.puter.site/release4050.zip",
        "/release4051.zip":"https://topwarhistory.puter.site/release4051.zip",
        "/release4052.zip":"https://topwarhistory.puter.site/release4052.zip",
        "/release4053.zip":"https://topwarhistory.puter.site/release4053.zip",
        "/release4056.zip":"https://topwarhistory.puter.site/release4056.zip",
        "/release4057.zip":"https://topwarhistory.puter.site/release4057.zip",
        "/release4061.zip":"https://topwarhistory.puter.site/release4061.zip",
        "/release4062.zip":"https://topwarhistory.puter.site/release4062.zip",
        "/release4063.zip":"https://topwarhistory.puter.site/release4063.zip",
        "/release4066.zip":"https://topwarhistory.puter.site/release4066.zip",
        "/release4067.zip":"https://topwarhistory.puter.site/release4067.zip",
        "/release4070.zip":"https://topwarhistory.puter.site/release4070.zip",
        "/release4071.zip":"https://topwarhistory.puter.site/release4071.zip",
        "/release4074.zip":"https://topwarhistory.puter.site/release4074.zip",
        "/release4076.zip":"https://topwarhistory.puter.site/release4076.zip",
        "/release4081.zip":"https://topwarhistory.puter.site/release4081.zip",
        "/release4085.zip":"https://topwarhistory.puter.site/release4085.zip",
        "/release4086.zip":"https://topwarhistory.puter.site/release4086.zip",
        "/release4087.zip":"https://topwarhistory.puter.site/release4087.zip",
        "/release4090.zip":"https://topwarhistory.puter.site/release4090.zip",
        "/release4091.zip":"https://topwarhistory.puter.site/release4091.zip",
        "/release4092.zip":"https://topwarhistory.puter.site/release4092.zip",
        "/release4093.zip":"https://topwarhistory.puter.site/release4093.zip",
        "/release4100.zip":"https://topwarhistory.puter.site/release4100.zip",
        "/release4101.zip":"https://topwarhistory.puter.site/release4101.zip",
        "/release4103.zip":"https://topwarhistory.puter.site/release4103.zip",
        "/release4105.zip":"https://topwarhistory.puter.site/release4105.zip",
        "/release4106.zip":"https://topwarhistory.puter.site/release4106.zip",
        "/release4107.zip":"https://topwarhistory.puter.site/release4107.zip",
        "/release4108.zip":"https://topwarhistory.puter.site/release4108.zip",
        "/release4110.zip":"https://topwarhistory.puter.site/release4110.zip",
        "/release4111.zip":"https://topwarhistory.puter.site/release4111.zip",
        "/release4112.zip":"https://topwarhistory.puter.site/release4112.zip",
        "/release4113.zip":"https://topwarhistory.puter.site/release4113.zip",
        "/release4114.zip":"https://topwarhistory.puter.site/release4114.zip",
        "/release4115.zip":"https://topwarhistory.puter.site/release4115.zip",
        "/release4118.zip":"https://topwarhistory.puter.site/release4118.zip",
        "/release4120.zip":"https://topwarhistory.puter.site/release4120.zip",
        "/release4201.zip":"https://topwarhistory.puter.site/release4201.zip",
        "/release4203.zip":"https://topwarhistory.puter.site/release4203.zip",
        "/release4204.zip":"https://topwarhistory.puter.site/release4204.zip",
        "/release4206.zip":"https://topwarhistory.puter.site/release4206.zip",
        "/release4207.zip":"https://topwarhistory.puter.site/release4207.zip",
        "/release4208.zip":"https://topwarhistory.puter.site/release4208.zip",
        "/release4209.zip":"https://topwarhistory.puter.site/release4209.zip",
        "/release4210.zip":"https://topwarhistory.puter.site/release4210.zip",
        "/release4211.zip":"https://topwarhistory.puter.site/release4211.zip",
        "/release4212.zip":"https://topwarhistory.puter.site/release4212.zip",
        "/release4213.zip":"https://topwarhistory.puter.site/release4213.zip",
        "/release4216.zip":"https://topwarhistory.puter.site/release4216.zip",
        "/release4217.zip":"https://topwarhistory.puter.site/release4217.zip",
        "/release4218.zip":"https://topwarhistory.puter.site/release4218.zip",
        "/release4219.zip":"https://topwarhistory.puter.site/release4219.zip",
        "/release4220.zip":"https://topwarhistory.puter.site/release4220.zip",
        "/release4221.zip":"https://topwarhistory.puter.site/release4221.zip",
        "/release4222.zip":"https://topwarhistory.puter.site/release4222.zip",
        "/release4230.zip":"https://topwarhistory.puter.site/release4230.zip"
        
      }),
    },
  ])
})
