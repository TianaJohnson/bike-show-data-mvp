
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "bike_type" (
    "id" SERIAL PRIMARY KRY,
    "road" BOOLEAN,
    "cyclocross" BOOLEAN,
    "gravel" BOOLEAN,
    "moutain" BOOLEAN,
    "city" BOOLEAN,
    "track" BOOLEAN,
    "tandem" BOOLEAN,
    "experimental" BOOLEAN,
    "touring" BOOLEAN,
    "other" VARCHAR (75)
);

CREATE TABLE "primary_frame_material" (
    "id" SERIAL PRIMARY KEY,
    "steel" BOOLEAN,
    "stainless" BOOLEAN,
    "carbon" BOOLEAN,
    "aluminum" BOOLEAN,
    "titanium" BOOLEAN,
    "magnesium" BOOLEAN,
    "wood" BOOLEAN,
    "bamboo" BOOLEAN,
    "secondry_present" BOOLEAN,
    "other" VARCHAR (50)
);

CREATE TABLE "secondary_frame_material" (
    "id" SERIAL PRIMARY KEY,
    "steel" BOOLEAN,
    "stainless" BOOLEAN,
    "carbon" BOOLEAN,
    "aluminum" BOOLEAN,
    "titanium" BOOLEAN,
    "magnesium" BOOLEAN,
    "wood" BOOLEAN,
    "bamboo" BOOLEAN,
    "other" VARCHAR (50)
)

CREATE TABLE "primary_frame_joining" (
    "id" SERIAL PRIMARY KEY,
    "welding" BOOLEAN,
    "brass_fillet" BOOLEAN,
    "lugged" BOOLEAN,
    "layed_up" BOOLEAN,
    "bonded" BOOLEAN,
    "silver_fillet" BOOLEAN,
    "mechanical" BOOLEAN,
    "secondry_present" BOOLEAN, 
    "other" VARCHAR (100)
);



CREATE TABLE "secondary_frame_joining" (
    "id" SERIAL PRIMARY KEY,
    "welding" BOOLEAN,
    "brass_fillet" BOOLEAN,
    "lugged" BOOLEAN,
    "layed_up" BOOLEAN,
    "bonded" BOOLEAN,
    "silver_fillet" BOOLEAN,
    "mechanical" BOOLEAN,
    "other" VARCHAR (100)
)
CREATE TABLE "wheel_size" (
    "id" SERIAL PRIMARY KEY,
    "36" BOOLEAN,
    "700c/29" BOOLEAN,
    "650b/27.5" BOOLEAN,
    "26" BOOLEAN,
    "24" BOOLEAN,
    "20" BOOLEAN,
    "other" VARCHAR (20)
);

CREATE TABLE "fork_material" (
    "id" SERIAL PRIMARY KEY,
    "suspention" BOOLEAN,
    "carbon" BOOLEAN,
    "aluminum" BOOLEAN,
    "stainless" BOOLEAN,
    "steel" BOOLEAN,
    "other" VARCHAR (100)
);

CREATE TABLE "steel_fork_build" (
    "id" SERIAL PRIMARY KEY,
    "unicrown" BOOLEAN,
    "segmented" BOOLEAN,
    "lugged" BOOLEAN,
    "bilam" BOOLEAN,
    "other" VARCHAR (100)
);



-- front/rear?
CREATE TABLE "axle_type" (
    "id" SERIAL PRIMARY KEY,
    "qr" BOOLEAN,
    "ta" BOOLEAN,
    "track" BOOLEAN,
    "other" VARCHAR (100),
);

CREATE TABLE "brake_type" (
    "id" SERIAL PRIMARY KEY,
    "flat_mount_disc" BOOLEAN,
    "post_mount" BOOLEAN,
    "is" BOOLEAN,
    "canti" BOOLEAN,
    "center_hole" BOOLEAN,
    "coaster" BOOLEAN,
    "none" BOOLEAN,
    "other" VARCHAR
);

CREATE TABLE "component_brand" ();
    "id" SERIAL PRIMARY KEY,

-- not sure exactly how to wright this one
CREATE TABLE "tire_width" (

);
