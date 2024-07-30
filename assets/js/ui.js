export const uiNewsItem = (item) => {
    return `
        <div class="relative rounded-[4px] flex flex-col p-[20px] bg-white flex  min-h-[200px]">
            <a href="#view/${item.slug}" class="absolute inset-0"></a>
            <div class="flex-1 flex justify-between gap-[20px]">
                <div>
                    <h2 class="font-medium text-[17px] text-[#072D4B]">${item.title}</h2>
                    <p class="mt-[10px] opacity-60 text-[14px] leading-[22px] text-[#072D4B] text-ellipsis  line-clamp-3">${item.description}</p>
                </div>
                <figure class="size-[150px] shrink-0">
                    <img src="${item.photo}" class="size-full object-cover" alt="">
                </figure>
            </div>
            <div class="flex items-center justify-between mt-[10px]">
                <div class="flex items-center ">
                    <div class="author opacity-40 text-[12px]">Sport Biz</div>
                    <span class="inline-flex size-[2px] bg-[#2F9FF8] rounded-full opacity-40 mx-[8px]"></span>
                    <div class="time opacity-40 text-[12px]">42 mins ago</div>
                </div>
                <div class="flex gap-[25px]">
                    <div class="flex gap-[9px] relative">
                        <a href="#" class="absolute inset-0"></a>
                        <figure class="size-[16px]">
                            <img src="assets/img/share.svg" class="size-full" alt="">
                        </figure>
                        <span class="text-[12px] text-[#0768B5]">Share</span>
                    </div>
                    <div class="flex gap-[9px] relative">
                        <a href="#" class="absolute inset-0"></a>
                        <figure class="size-[16px]">
                            <img src="assets/img/pocket.svg" class="size-full" alt="">
                        </figure>
                        <span class="text-[12px] text-[#0768B5]">Read Later</span>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const uiLoading = (type) => {
    const root = document.querySelector('#root')
    const loading = document.querySelector('#loading')
    if(type === 'show') {
        root.style.display = 'none'
        loading.style.display = 'flex'
    }
    else {
        loading.style.display = 'none'
        root.style.display = 'block'
    }
}