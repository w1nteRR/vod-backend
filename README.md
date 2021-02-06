## Quick start with Google Cloud Run

###### Build new image

```
gcloud builds submit --tag gcr.io/$GOOGLE_CLOUD_PROJECT/$IMAGE_NAME
```
###### Run the app locally

```
docker run -d -p 8080:8080 gcr.io/$GOOGLE_CLOUD_PROJECT/$IMAGE_NAME
```
###### Deploy to Cloud Run

```
gcloud run deploy $NAME --image $IMAGE --platform managed --region $REGION --$AUTH_FLAG
```
###### Remove image

```
gcloud container images delete $IMAGE
```
