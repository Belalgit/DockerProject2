**Repo 1: App=>Docker Build=> AWS ECR** 

**Repo2: ECR=> EKS**

1. Create an Application source code using NodeJS
   
2. Check the source code locally using VSCode
	#npm install		(if needed)
	node index.js
	# browser: http://127.0.0.1:8080

4. Make a Dockerfile using VSCode
   
5. Test in local machine( Docker desktop)
	docker build -t dockerproject1 .
	docker images
	docker run -d -p 8080:8080 dockerproject1
	docker ps
