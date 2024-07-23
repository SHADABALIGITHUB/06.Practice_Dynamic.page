// script.js

const threadSection= document.getElementById('thread');



const data = {
    "tasks": [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            "status": "notworkyet",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment Scope of Agility Specific Accountable Staggering Approach\r\n\r\n",
                    "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                    "asset_type": "display_asset",
                    "asset_content_type": "video"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                },
                {
                    "asset_id": 18885,
                    "asset_title": "Structure your pointers",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                },
                {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more read more",
                    "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "article"
                }
            ]
        }
    ]
};

// theme

const btnTheme=document.querySelector('.Theme');


document.querySelector('.Theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    const btntext = document.querySelector('.btn-text-theme').innerText;
     console.log(btntext);
    if (btntext === 'Dark') {
        document.querySelector('.btn-text-theme').innerText = 'Light';
    } else {
        document.querySelector('.btn-text-theme').innerText = 'Dark';
    }
    
});

 

const container = document.getElementById('tasks-container');

data.tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task-container';

    const taskMainHeading = document.createElement('div');
    taskMainHeading.className = 'task-main-heading';

    const taskTitle = document.createElement('h2');
    taskTitle.className = 'task-title';
    taskTitle.innerText = task.task_title;

    const taskDescription = document.createElement('p');
    taskDescription.className = 'task-description';
    taskDescription.innerText = task.task_description;

    taskMainHeading.appendChild(taskTitle);
    taskMainHeading.appendChild(taskDescription);

    taskElement.appendChild(taskMainHeading);

    const assetContainerMain= document.createElement('div');
    assetContainerMain.className = 'asset-container-main';

    task.assets.forEach(asset => {
        const assetElement = document.createElement('div');
        assetElement.className = 'asset-container';

        const divforheadingandexclamtory= document.createElement('div');
        divforheadingandexclamtory.className = 'divforheadingandexclamtory';

        const exclamtory= document.createElement('img');
        exclamtory.src = './assets/exclamation-svgrepo-com.svg';

        const assetTitle = document.createElement('h3');
        assetTitle.innerText = asset.asset_title;

        divforheadingandexclamtory.appendChild(assetTitle);
        divforheadingandexclamtory.appendChild(exclamtory);

        const assetDescription = document.createElement('p');
        assetDescription.innerText = `Description : ${asset.asset_description}`;

        assetElement.appendChild(divforheadingandexclamtory);
        assetElement.appendChild(assetDescription);

        const videocontainer = document.createElement('div');
        videocontainer.className = 'video-container';

        // thread creation custom 
        if (asset.asset_content_type === 'threadbuilder') {
            const threadClone = threadSection.cloneNode(true); // Clone the section
            threadClone.style.display = 'block'; // Make it visible
            assetElement.appendChild(threadClone);
        }
        if(asset.asset_content_type==='article'){
             const Elementunderwork=document.createElement('div');
             Elementunderwork.innerText="Work in progress";
             Elementunderwork.style.width="100%";
             Elementunderwork.style.textAlign='centre';
             Elementunderwork.style.color="blue";
             assetElement.appendChild(Elementunderwork);


        }

        if (asset.asset_content_type === 'video' && asset.asset_content.trim()) {
            const videoElement = document.createElement('iframe');
            videoElement.src = asset.asset_content.trim();
            videoElement.width = "560";
            videoElement.height = "315";
            videoElement.frameBorder = "0";
            videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            videoElement.allowFullscreen = true;
            videocontainer.appendChild(videoElement);
            assetElement.appendChild(videocontainer);
        } else if (asset.asset_content_type === 'article' && asset.asset_content.trim()) {
            const articleLink = document.createElement('a');
            articleLink.href = asset.asset_content.trim();
            articleLink.innerText = 'Read More';
            articleLink.target = '_blank';
            assetElement.appendChild(articleLink);
        }
         assetContainerMain.appendChild(assetElement);

        // taskElement.appendChild(assetElement);
    });
    taskElement.appendChild(assetContainerMain);

    container.appendChild(taskElement);
});



//  close and open the thread

const ThreadDivCloseandOpen = document.querySelector('.thread-close-open');
const threadArrow = document.querySelector('.arrow-collapse');



threadArrow.addEventListener('click', () => {
    if (ThreadDivCloseandOpen.style.display === 'none') {
        ThreadDivCloseandOpen.style.display = 'block';
        threadArrow.src = './assets/arrow-down.svg';
    } else {
        ThreadDivCloseandOpen.style.display = 'none';
        threadArrow.src = './assets/arrow-up.svg';
    }
});