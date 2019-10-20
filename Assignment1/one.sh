# ESM 267 Assignment 1
# Chase Brewster

# see commands as they are executed
set -x

# create an output folder
mkdir -p sb_county
mkdir -p MODIS_SB

# view shapefile metadata
ogrinfo -al -so tl_2018_us_county/tl_2018_us_county.shp

## extract outline of SB county and reproject to Cal Teale Albers
ogr2ogr -t_srs EPSG:3310 -where "NAME='Santa Barbara'" sb_county/sb_county.shp tl_2018_us_county/tl_2018_us_county.shp

## extract SB county from MODIS image and reproject to Cal Teale Albers

# set ROI
roi=sb_county/sb_county.shp

# set common arguments
common_args="-dstalpha -of GTiff -co COMPRESS=DEFLATE -overwrite"

# set clip arguments
clip_args="-cutline $roi -crop_to_cutline"

# set projection arguments
project_args="-t_srs EPSG:3310"

# with arguments set, create loop using gdalwarp
for image in *.tif
do
	# clip image
	echo $image
	gdalwarp $common_args $clip_args $image ${image}_clipped.tif
	# reproject image
	gdalwarp $common_args $project_args ${image}_clipped.tif MODIS_SB/${image}_NAD83.tif
done

rm -v *.tif