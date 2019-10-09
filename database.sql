
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- builder identification table
CREATE TABLE "builder" (
    "id" SERIAL PRIMARY KEY,
    "builder_name" VARCHAR (100),
    "brand" VARCHAR (100)
);

-- Bike type per builder
CREATE TABLE "bike_type" (
    "id" SERIAL PRIMARY KEY,
    "road" BOOLEAN,
    "cyclocross" BOOLEAN,
    "gravel" BOOLEAN,
    "moutain" BOOLEAN,
    "city" BOOLEAN,
    "track" BOOLEAN,
    "tandem" BOOLEAN,
    "experimental" BOOLEAN,
    "touring" BOOLEAN,
    "other" VARCHAR (100)
);

-- primary frame material, removed its link to secondary table
CREATE TABLE "primary_frame_material" (
    "id" SERIAL PRIMARY KEY,
    "steel" BOOLEAN,
    "stainless" BOOLEAN,
    "carbon" BOOLEAN,
    "aluminum" BOOLEAN,
    "titanium" BOOLEAN,
    "magnesium" BOOLEAN,
    "wood" BOOLEAN,
    "bamboo" BOOLEAN,
    "other" VARCHAR (50),
    "notes" VARCHAR (200)
);

-- secondary frame material, refrenced by primary frame material
CREATE TABLE "secondary_frame_material" (
    "id" SERIAL PRIMARY KEY,
    "is_present" BOOLEAN,
    "steel" BOOLEAN,
    "stainless" BOOLEAN,
    "carbon" BOOLEAN,
    "aluminum" BOOLEAN,
    "titanium" BOOLEAN,
    "magnesium" BOOLEAN,
    "wood" BOOLEAN,
    "bamboo" BOOLEAN,
    "other" VARCHAR (50),
    "notes" VARCHAR (200)
);

-- Primary means of frame joining
CREATE TABLE "primary_frame_joining" (
    "id" SERIAL PRIMARY KEY,
    "welding" BOOLEAN,
    "brass_fillet" BOOLEAN,
    "lugged" BOOLEAN,
    "layed_up" BOOLEAN,
    "bonded" BOOLEAN,
    "silver_fillet" BOOLEAN,
    "mechanical" BOOLEAN,
    "other" VARCHAR (100),
    "notes" VARCHAR (200)
);

-- Secondary frame joining material, if present. Refrenced by Primary frame joining table
CREATE TABLE "secondary_frame_joining" (
    "id" SERIAL PRIMARY KEY,
    "is_present" BOOLEAN,
    "welding" BOOLEAN,
    "brass_fillet" BOOLEAN,
    "lugged" BOOLEAN,
    "layed_up" BOOLEAN,
    "bonded" BOOLEAN,
    "silver_fillet" BOOLEAN,
    "mechanical" BOOLEAN,
    "other" VARCHAR (100),
    "notes" VARCHAR (200)
)

-- Main fork material
CREATE TABLE "fork_material" (
    "id" SERIAL PRIMARY KEY,
    "suspention" BOOLEAN,
    "carbon" BOOLEAN,
    "aluminum" BOOLEAN,
    "stainless" BOOLEAN,
    "steel" BOOLEAN,
	"steel_build" INT REFERENCES "steel_fork_build"("id"),
    "other" VARCHAR (100)
);

-- steel fork build style, refrenced by fork material table
CREATE TABLE "steel_fork_build" (
    "id" SERIAL PRIMARY KEY,
    "unicrown" BOOLEAN,
    "segmented" BOOLEAN,
    "lugged" BOOLEAN,
    "bilam" BOOLEAN,
    "other" VARCHAR (100)
);

-- Bike location placement refrence table
CREATE TABLE "placement"(
    "id" SERIAL PRIMARY KEY,
    "front" BOOLEAN,
    "rear" BOOLEAN,
    "both" BOOLEAN,
)

-- Wheel size
CREATE TABLE "wheel_size" (
    "id" SERIAL PRIMARY KEY,
    "36" BOOLEAN,
    "700c/29" BOOLEAN,
    "650b/27.5" BOOLEAN,
    "26" BOOLEAN,
    "24" BOOLEAN,
    "20" BOOLEAN,
    "other" VARCHAR (20),
    "location" INT REFERENCES "placement"("id")
);

-- tire size refrences location
CREATE TABLE "tire_size" (
    "id" SERIAL PRIMARY KEY,
    "diam" INTEGER, 
    "width" INTEGER,
    "other" VARCHAR (25),
    "location" INT REFERENCES "placement"("id")
);

-- axle type, refrences location
CREATE TABLE "axle_type" (
    "id" SERIAL PRIMARY KEY,
    "qr" BOOLEAN,
    "ta" BOOLEAN,
    "track" BOOLEAN,
    "other" VARCHAR (100),
    "location" INT REFERENCES "placement"("id")
);

--brand type, to be refrenced
CREATE TABLE "component_brand" (
    "id" SERIAL PRIMARY KEY,
    "paul" BOOLEAN,
    "sram" BOOLEAN,
    "shimano" BOOLEAN,
    "campy" BOOLEAN,
    "hayes" BOOLEAN,
    "hope" BOOLEAN,
    "trp" BOOLEAN,
    "promax" BOOLEAN,
    "cane_creek" BOOLEAN,
    "brooks" BOOLEAN,
    "ritchey" BOOLEAN,
    "thompson" BOOLEAN,
    "raceface" BOOLEAN,
    "velo_orange" BOOLEAN,
	"sr_suntour" BOOLEAN,
	"dt_swiss" BOOLEAN,
	"white_industries" BOOLEAN,
	"velocity" BOOLEAN,
	"phill_wood" BOOLEAN,
	"i9" BOOLEAN,
    "other" VARCHAR (400)
);



-- brake type, refrences charectoristics and brand
CREATE TABLE "brake_type" (
    "id" SERIAL PRIMARY KEY,
    "flat_mount_disc" BOOLEAN,
    "post_mount_disc" BOOLEAN,
    "is_disc" BOOLEAN,
    "canti" BOOLEAN,
    "center_hole" BOOLEAN,
    "coaster" BOOLEAN,
    "none" BOOLEAN,
    "brand" INT REFERENCES "component_brand" ("id"),
    "other" VARCHAR (100),
    "characteristic" INT REFERENCES "brake_characteristic" ("id")
);

-- brake charictoristics refrenced by brake type
CREATE TABLE "brake_characteristic"(
    "id" SERIAL PRIMARY KEY,
    "mechanical" BOOLEAN,
    "hydralic" BOOLEAN,
    "none" BOOLEAN
);

-- drive train table, refrences brand
CREATE TABLE "drive_train" (
	"id" SERIAL PRIMARY KEY,
	"mechanical" BOOLEAN,
	"wire" BOOLEAN,
	"wireless" BOOLEAN,
	"Hydraulic" BOOLEAN,
	"single_speef" BOOLEAN,
	"brand" INT REFERENCES "component_brand" ("id")
);


-- file table to refrence all
CREATE TABLE "build" (
    "id" SERIAL PRIMARY KEY,
    "builder_info" INT REFERENCES "builder"("id"),
    "user_id" INT REFERENCES "user"("id"),
    "bike" INT REFERENCES "bike_type"("id"),
    "frame_material_1" INT REFERENCES "primary_frame_material"("id"),
    "frame_material_2" INT REFERENCES "secondary_frame_material"("id")
);

