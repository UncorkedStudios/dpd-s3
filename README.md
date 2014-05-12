# dpd-s3 v0.2.0

Deployd module for a resource to GET/POST to and from an AWS s3 bucket

This is based on Ritchie Martori's origin version ( https://github.com/deployd/dpd-s3 ) which was un-published from npm as it didn't work.  Ritchie accepted the pull request with my changes to make it work again, but hasn't ever re-published it.  So I am publishing it as I frequently use it.

Since then I have continued to make changes to suite my specific needs.  

## Install

	npm install dpd-s3

## Configuration

Add a resource in the deployd dashboard selecting dpd-imageWrangler and name your resource. In the config for your new resource, you'll need to supply:

-	AWS Access Key
- 	AWS Secret
-	AWS region
-	AWS S3 bucket name

*additional optional configurations:*

-	basePath.  optionally include a base url (like your Cloud Front url) to be inlcuded with the image urls in the repsonse JSON object.
-	Public read access. When files are placed on your S3 bucket, automatically flag them for public read.
