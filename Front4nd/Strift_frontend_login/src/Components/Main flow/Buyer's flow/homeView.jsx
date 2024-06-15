import React from "react";
import { Link } from "react-router-dom";
import Post from "./post";

function Home() {

  const postsData = [
    {
      images: ['https://s3-alpha-sig.figma.com/img/2df1/0324/a50e397dbe4d48ac80251b22f6258c71?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLT4grcfQdNk5Ji2Zvn2CXGNWYWAu61Y~2AK919RlPAWPBVsTsWL~ZlQCK2i1m2UWZ-QL-XRklbZD5ijK8gnrE7PRAYcV3vSCHqR4fJDGK3QlFAYLsoCR1F4Ypi9itmDokAQJfydBWEwEbZH45KLNwndwBJ3wKh0IzToPRxc7YMJO7icLqg74kT4xr9Yz-QvSPNpWSI7jQciIVcyrQXU-~ZxnoaVxIKyhCapi91l3JENbYB3WtbrF16hsFxNQFoS3CPVdgBfPEj0qayA8Ogod75tRKJ1SIyLStjcYB10pIEwUbkXIc9xUWwAUtmLkcEvnUxzlXuZ-CrxzpDjXjGRUg__',

       'https://s3-alpha-sig.figma.com/img/8487/262f/eef65ec8e46f164fdd6a104be7aaf372?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjlc~htqQmmDPss1HADbxXDxqnjh9~DCWdSg4JziN38Z~u4hZcG1jk8Rf1sjqm0etPJ6KyP7zvDvpZdLsQgl0coAIMv2ZRLT0Wu-o6yNwiMSCfQ8sD-jeoZTbQgUDYAqo2AfpdsP1g7dOeqVsDwJKTIvnNZ3Y-9G3BLeCMPID-qVMF2BL5DRh6RAgZqasxMKPfKTJWTO9VTqqHFu2w-Vzk373zUkLvKq2P-xJcnTZbnl64M87yI8gTnYl9JOGZq6lVBEg5L~I0yeTwfWIf7GXr8L61LP3wnOaU~F7zURnw5V80XJulcAGBCU8GSzW0Epy5pJVowPdTPTyEUBltDoIg__',
       'https://s3-alpha-sig.figma.com/img/687e/65d7/c7c63a04f12339c098f83f2f28523ae8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wgl6-PUQSWp~NqGusAL6fH-FPRZwfUvvTJDd~SyRQCAMF8lKmQI8bsIjpFkwQW7d9rXrGu21CGs55lZvo64otxvxdFz~OnH-gMH2XWqcnlxAFyczOWNbnqrRf4XErUyl3sdHSTacITmmlRqoYZ1rCRY-ePB~lGQOEsSH~cbKt0j3ZSTa-1aNWw6Abwgs9C3ou8dGSCUmnApzZ8-W29OXTDUShQWi9V7D8mO91MWqqG36TyIx93sYMH5s-E9~dDOf9uUg~j7VZSE6~vDNtncIexJ8tv6RQ2-c~Bhf4QZNJfXfAbcZauLL0WWFJIWChkLWg7kLklZ~NgfxtiEPC~~Vlw__'
      ], 
      storeName: 'blurng',
      description: 'Unconditional tee will be restocking in August. Will lyk the date soon',
      time: '1 day',
      likes: '1.1k',
      commentsCount: '334',
    },
    {
      images: ['https://s3-alpha-sig.figma.com/img/2df1/0324/a50e397dbe4d48ac80251b22f6258c71?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLT4grcfQdNk5Ji2Zvn2CXGNWYWAu61Y~2AK919RlPAWPBVsTsWL~ZlQCK2i1m2UWZ-QL-XRklbZD5ijK8gnrE7PRAYcV3vSCHqR4fJDGK3QlFAYLsoCR1F4Ypi9itmDokAQJfydBWEwEbZH45KLNwndwBJ3wKh0IzToPRxc7YMJO7icLqg74kT4xr9Yz-QvSPNpWSI7jQciIVcyrQXU-~ZxnoaVxIKyhCapi91l3JENbYB3WtbrF16hsFxNQFoS3CPVdgBfPEj0qayA8Ogod75tRKJ1SIyLStjcYB10pIEwUbkXIc9xUWwAUtmLkcEvnUxzlXuZ-CrxzpDjXjGRUg__',

       'https://s3-alpha-sig.figma.com/img/8487/262f/eef65ec8e46f164fdd6a104be7aaf372?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjlc~htqQmmDPss1HADbxXDxqnjh9~DCWdSg4JziN38Z~u4hZcG1jk8Rf1sjqm0etPJ6KyP7zvDvpZdLsQgl0coAIMv2ZRLT0Wu-o6yNwiMSCfQ8sD-jeoZTbQgUDYAqo2AfpdsP1g7dOeqVsDwJKTIvnNZ3Y-9G3BLeCMPID-qVMF2BL5DRh6RAgZqasxMKPfKTJWTO9VTqqHFu2w-Vzk373zUkLvKq2P-xJcnTZbnl64M87yI8gTnYl9JOGZq6lVBEg5L~I0yeTwfWIf7GXr8L61LP3wnOaU~F7zURnw5V80XJulcAGBCU8GSzW0Epy5pJVowPdTPTyEUBltDoIg__',
       'https://s3-alpha-sig.figma.com/img/687e/65d7/c7c63a04f12339c098f83f2f28523ae8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wgl6-PUQSWp~NqGusAL6fH-FPRZwfUvvTJDd~SyRQCAMF8lKmQI8bsIjpFkwQW7d9rXrGu21CGs55lZvo64otxvxdFz~OnH-gMH2XWqcnlxAFyczOWNbnqrRf4XErUyl3sdHSTacITmmlRqoYZ1rCRY-ePB~lGQOEsSH~cbKt0j3ZSTa-1aNWw6Abwgs9C3ou8dGSCUmnApzZ8-W29OXTDUShQWi9V7D8mO91MWqqG36TyIx93sYMH5s-E9~dDOf9uUg~j7VZSE6~vDNtncIexJ8tv6RQ2-c~Bhf4QZNJfXfAbcZauLL0WWFJIWChkLWg7kLklZ~NgfxtiEPC~~Vlw__'
      ], 
      storeName: 'blurng',
      description: 'Unconditional tee will be restocking in August. Will lyk the date soon',
      time: '1 day',
      likes: '1.1k',
      commentsCount: '334',
    },
    {
      images: ['https://s3-alpha-sig.figma.com/img/2df1/0324/a50e397dbe4d48ac80251b22f6258c71?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLT4grcfQdNk5Ji2Zvn2CXGNWYWAu61Y~2AK919RlPAWPBVsTsWL~ZlQCK2i1m2UWZ-QL-XRklbZD5ijK8gnrE7PRAYcV3vSCHqR4fJDGK3QlFAYLsoCR1F4Ypi9itmDokAQJfydBWEwEbZH45KLNwndwBJ3wKh0IzToPRxc7YMJO7icLqg74kT4xr9Yz-QvSPNpWSI7jQciIVcyrQXU-~ZxnoaVxIKyhCapi91l3JENbYB3WtbrF16hsFxNQFoS3CPVdgBfPEj0qayA8Ogod75tRKJ1SIyLStjcYB10pIEwUbkXIc9xUWwAUtmLkcEvnUxzlXuZ-CrxzpDjXjGRUg__',

       'https://s3-alpha-sig.figma.com/img/8487/262f/eef65ec8e46f164fdd6a104be7aaf372?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjlc~htqQmmDPss1HADbxXDxqnjh9~DCWdSg4JziN38Z~u4hZcG1jk8Rf1sjqm0etPJ6KyP7zvDvpZdLsQgl0coAIMv2ZRLT0Wu-o6yNwiMSCfQ8sD-jeoZTbQgUDYAqo2AfpdsP1g7dOeqVsDwJKTIvnNZ3Y-9G3BLeCMPID-qVMF2BL5DRh6RAgZqasxMKPfKTJWTO9VTqqHFu2w-Vzk373zUkLvKq2P-xJcnTZbnl64M87yI8gTnYl9JOGZq6lVBEg5L~I0yeTwfWIf7GXr8L61LP3wnOaU~F7zURnw5V80XJulcAGBCU8GSzW0Epy5pJVowPdTPTyEUBltDoIg__',
       'https://s3-alpha-sig.figma.com/img/687e/65d7/c7c63a04f12339c098f83f2f28523ae8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wgl6-PUQSWp~NqGusAL6fH-FPRZwfUvvTJDd~SyRQCAMF8lKmQI8bsIjpFkwQW7d9rXrGu21CGs55lZvo64otxvxdFz~OnH-gMH2XWqcnlxAFyczOWNbnqrRf4XErUyl3sdHSTacITmmlRqoYZ1rCRY-ePB~lGQOEsSH~cbKt0j3ZSTa-1aNWw6Abwgs9C3ou8dGSCUmnApzZ8-W29OXTDUShQWi9V7D8mO91MWqqG36TyIx93sYMH5s-E9~dDOf9uUg~j7VZSE6~vDNtncIexJ8tv6RQ2-c~Bhf4QZNJfXfAbcZauLL0WWFJIWChkLWg7kLklZ~NgfxtiEPC~~Vlw__'
      ], 
      storeName: 'blurng',
      description: 'Unconditional tee will be restocking in August. Will lyk the date soon',
      time: '1 day',
      likes: '1.1k',
      commentsCount: '334',
    },
  ]


  return (
    <main className="bg-white h-screen">
      <header className="fixed z-[99999] w-full h-[110px] px-3 pt-6 bg-[#313131] flex justify-center items-center gap-2 ">
        <div className="flex flex-shrink-0 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
          >
            <path
              d="M2.21082 25.3364H9.56557V28.0079H5.70457V48.2489H9.56557V50.9237H2.21082V25.3364Z"
              fill="white"
            />
            <path
              d="M17.4002 32.9219C18.0697 32.9219 18.731 32.9982 19.3859 33.1494C20.0424 33.3013 20.5307 33.4541 20.8517 33.6076L21.3294 33.8351L20.0067 36.4839C19.0918 35.9964 18.2232 35.7526 17.4002 35.7526C16.9427 35.7526 16.6185 35.803 16.4284 35.9021C16.2399 36.0021 16.1457 36.1881 16.1457 36.4611C16.1457 36.5221 16.153 36.5838 16.1684 36.6464C16.183 36.7073 16.2139 36.765 16.2594 36.8186C16.3049 36.8706 16.3455 36.9161 16.3829 36.9551C16.4219 36.9925 16.4869 37.0331 16.5779 37.0786C16.6689 37.1241 16.7412 37.1591 16.7957 37.1826C16.8493 37.2046 16.937 37.2379 17.0589 37.2834C17.18 37.3289 17.271 37.3638 17.3319 37.3874C17.392 37.4093 17.4952 37.4442 17.6407 37.4914C17.7853 37.5369 17.8958 37.5677 17.9722 37.5824C18.4442 37.7189 18.8545 37.8716 19.2039 38.0406C19.5549 38.208 19.9238 38.4363 20.3122 38.7264C20.7022 39.0148 21.0028 39.3796 21.2157 39.8216C21.4277 40.262 21.5342 40.7633 21.5342 41.3264C21.5342 43.9914 19.6833 45.3239 15.9832 45.3239C15.1463 45.3239 14.3517 45.1947 13.5977 44.9371C12.8437 44.6771 12.2985 44.4187 11.9629 44.1604L11.4624 43.7476L13.1069 40.9851C13.228 41.0916 13.3872 41.2175 13.5847 41.3621C13.7837 41.5076 14.142 41.7058 14.6604 41.9569C15.178 42.2087 15.6265 42.3339 16.0059 42.3339C16.8444 42.3339 17.2637 42.0527 17.2637 41.4889C17.2637 41.2289 17.1564 41.0274 16.9419 40.8844C16.729 40.7397 16.3675 40.5756 15.8564 40.3936C15.347 40.21 14.948 40.0418 14.6604 39.8899C13.9275 39.5088 13.3482 39.079 12.9217 38.5996C12.4967 38.1186 12.2847 37.4816 12.2847 36.6886C12.2847 35.5016 12.7445 34.5777 13.6659 33.9164C14.5865 33.2534 15.8312 32.9219 17.4002 32.9219Z"
              fill="white"
            />
            <path
              d="M24.2318 33.2631V28.9016H28.2748V33.2631H30.7416V36.3474H28.2748V40.0719C28.2748 41.1533 28.5787 41.6936 29.1881 41.6936C29.3392 41.6936 29.4984 41.6635 29.6658 41.6026C29.8348 41.5425 29.9648 41.4807 30.0558 41.4174L30.1923 41.3264L31.1966 44.5959C30.3296 45.0809 29.3408 45.3239 28.2293 45.3239C27.4664 45.3239 26.8107 45.1906 26.2631 44.9241C25.7146 44.6576 25.2994 44.3001 25.0183 43.8516C24.7364 43.4031 24.5349 42.9319 24.4138 42.4379C24.2919 41.9422 24.2318 41.4125 24.2318 40.8486V36.3474H22.5386V33.2631H24.2318Z"
              fill="white"
            />
            <path
              d="M32.5691 44.9826V33.2631H36.6121V34.9531H36.6576C36.6877 34.893 36.7364 34.8166 36.8038 34.7256C36.8729 34.6346 37.0216 34.4754 37.2491 34.2479C37.4782 34.0187 37.722 33.8124 37.9803 33.6304C38.2403 33.4467 38.5759 33.2826 38.9878 33.1396C39.399 32.995 39.8174 32.9219 40.2423 32.9219C40.6843 32.9219 41.1182 32.9828 41.5456 33.1039C41.9722 33.2257 42.2842 33.3468 42.4816 33.4679L42.8033 33.6531L41.1133 37.0786C40.6104 36.6521 39.9092 36.4384 39.0106 36.4384C38.5231 36.4384 38.1038 36.5456 37.7528 36.7601C37.4035 36.973 37.1565 37.2314 37.0118 37.5369C36.8664 37.8408 36.7632 38.0991 36.7031 38.3136C36.6422 38.5265 36.6121 38.6931 36.6121 38.8141V44.9826H32.5691Z"
              fill="white"
            />
            <path
              d="M44.3315 26.7306C44.8036 26.2585 45.3667 26.0221 46.0215 26.0221C46.678 26.0221 47.2411 26.2585 47.7115 26.7306C48.1836 27.2035 48.42 27.7665 48.42 28.4206C48.42 29.0755 48.1836 29.6385 47.7115 30.1106C47.2411 30.5835 46.678 30.8191 46.0215 30.8191C45.3667 30.8191 44.8036 30.5835 44.3315 30.1106C43.8587 29.6385 43.623 29.0755 43.623 28.4206C43.623 27.7665 43.8587 27.2035 44.3315 26.7306ZM43.9448 33.2631V44.9826H47.9878V33.2631H43.9448Z"
              fill="white"
            />
            <path
              d="M51.5291 33.2631V30.7736C51.5437 29.0235 51.9548 27.6227 52.7608 26.5714C53.5684 25.5208 54.6881 24.9951 56.1181 24.9951C56.7291 24.9951 57.3116 25.0829 57.8666 25.2584C58.4231 25.4322 58.8229 25.611 59.0658 25.7946L59.4558 26.0449L58.0388 28.9016C57.6724 28.6871 57.2686 28.5799 56.8266 28.5799C56.3236 28.5799 55.9889 28.7513 55.8223 29.0934C55.6549 29.4362 55.5721 30.0342 55.5721 30.8874V33.2631H58.2663V36.3474H55.5721V44.9826H51.5291V36.3474H49.8358V33.2631H51.5291Z"
              fill="white"
            />
            <path
              d="M60.0952 33.2631V28.9016H64.1382V33.2631H66.605V36.3474H64.1382V40.0719C64.1382 41.1533 64.4421 41.6936 65.0515 41.6936C65.2026 41.6936 65.3619 41.6635 65.5292 41.6026C65.6982 41.5425 65.8282 41.4807 65.9192 41.4174L66.0557 41.3264L67.06 44.5959C66.193 45.0809 65.2042 45.3239 64.0927 45.3239C63.3298 45.3239 62.6741 45.1906 62.1265 44.9241C61.578 44.6576 61.1629 44.3001 60.8817 43.8516C60.5998 43.4031 60.3983 42.9319 60.2772 42.4379C60.1554 41.9422 60.0952 41.4125 60.0952 40.8486V36.3474H58.402V33.2631H60.0952Z"
              fill="white"
            />
            <path
              d="M68.4324 48.2489H72.2934V28.0079H68.4324V25.3364H75.7871V50.9237H68.4324V48.2489Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="relative flex-grow max-w-full sm:max-w-sm">
          <input
            className="z-[99] text-white w-full h-[37px] pl-10 p-3 rounded-lg bg-[#252525]"
            type="text"
            placeholder="Search anything"
            name="searchbox"
            id="searchbox"
          />
          <button>
            <div className="absolute bottom-2 left-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M16.2675 18.8124L10.5366 13.103C10.0844 13.453 9.55575 13.7265 8.9506 13.9236C8.34545 14.1203 7.71475 14.2186 7.0585 14.2186C5.3666 14.2186 3.93737 13.6353 2.77082 12.4688C1.60427 11.3022 1.021 9.8877 1.021 8.2252C1.021 6.548 1.60427 5.12613 2.77082 3.95958C3.93737 2.79268 5.35925 2.20923 7.03645 2.20923C8.69895 2.20923 10.1135 2.79268 11.28 3.95958C12.4469 5.12613 13.0304 6.548 13.0304 8.2252C13.0304 8.86675 12.9355 9.47925 12.7458 10.0627C12.5561 10.6458 12.2717 11.1853 11.8927 11.6813L17.6456 17.4342L16.2675 18.8124ZM7.03645 12.2719C8.17395 12.2719 9.13277 11.8782 9.91292 11.0907C10.6931 10.3032 11.0831 9.348 11.0831 8.2252C11.0831 7.0877 10.6931 6.12888 9.91292 5.34873C9.13277 4.56823 8.17395 4.17798 7.03645 4.17798C5.88425 4.17798 4.92175 4.56823 4.14895 5.34873C3.37615 6.12888 2.98975 7.0877 2.98975 8.2252C2.98975 9.348 3.37615 10.3032 4.14895 11.0907C4.92175 11.8782 5.88425 12.2719 7.03645 12.2719Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="flex-shrink-0 w-[37px] h-[37px] p-2 rounded-full flex items-center justify-center  bg-[#252525]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M5.08751 20.2584C4.67501 20.2584 4.31216 20.1056 3.99897 19.8C3.68577 19.4945 3.52917 19.1278 3.52917 18.7V6.94377C3.52917 6.516 3.68577 6.14933 3.99897 5.84377C4.31216 5.53822 4.67501 5.38544 5.08751 5.38544H7.47084V5.15627C7.47084 4.1785 7.81459 3.34968 8.50209 2.66982C9.18959 1.98995 10.0222 1.65002 11 1.65002C11.9778 1.65002 12.8104 1.98995 13.4979 2.66982C14.1854 3.34968 14.5292 4.1785 14.5292 5.15627V5.38544H16.9125C17.3403 5.38544 17.707 5.53822 18.0125 5.84377C18.3181 6.14933 18.4708 6.516 18.4708 6.94377V18.7C18.4708 19.1278 18.3181 19.4945 18.0125 19.8C17.707 20.1056 17.3403 20.2584 16.9125 20.2584H5.08751ZM8.25001 9.69377C8.47917 9.69377 8.66633 9.6212 8.81147 9.47607C8.95661 9.33093 9.02917 9.14377 9.02917 8.91461V6.94377H7.47084V8.91461C7.47084 9.14377 7.54341 9.33093 7.68855 9.47607C7.83369 9.6212 8.02084 9.69377 8.25001 9.69377ZM9.02917 5.38544H12.9708V5.15627C12.9556 4.60627 12.7608 4.14412 12.3865 3.76982C12.0122 3.39551 11.55 3.20836 11 3.20836C10.45 3.20836 9.98786 3.39551 9.61355 3.76982C9.23924 4.14412 9.04445 4.60627 9.02917 5.15627V5.38544ZM13.75 9.69377C13.9792 9.69377 14.1663 9.6212 14.3115 9.47607C14.4566 9.33093 14.5292 9.14377 14.5292 8.91461V6.94377H12.9708V8.91461C12.9708 9.14377 13.0434 9.33093 13.1885 9.47607C13.3337 9.6212 13.5208 9.69377 13.75 9.69377Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex-shrink-0 w-[37px] h-[37px] flex items-center justify-center">
          <img
            className="rounded-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/f62a/0334/b180f33352ad67db1d587f6689f066a1?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKsaqek~ZeDYFtdu3iR7u2GQdb6mHJ-JjUUS1DOO0-HS1QbW4-7pyeQcUpDNquyb8Lxs0YF~2~vZ-fCiisDF-q5ftJhekG7QXrR93b10ujqrxSZ9EibvOotBQUBgoIDKNcWc-2R9Z-mgs-~5khOcOluf8TrrebmvYIYGi79VWSXLMgnY~4qk4NMaAnEImYOVey24N1Tik6qfuMQdmZksioR4QCpZN26vvt0p12BpAmkLLCSRHqW1L0Nyq3h4CcwnQTl~AIwz0KvEp-qEt5cU3MzOZ0u-U0nTSdN5DKKzDpv~NjHsw6LVSM9n2m~L9k8HmNRJqvTYIzk0eyRgxNCC0A__"
            alt=""
          />
        </div>
      </header>
      <div id="main" className="pt-[110px]">

        {postsData.map( (post,index) => (
          <Post key={index}
          storeData={post}
          />
        ) )}

      </div>
      <div className="py-5 text-center bg-slate-500 text-black rounded-t-2xl">Made By Love From Delhi... STAY TUNED!!</div>
      
    </main>
  );
}

export default Home;
