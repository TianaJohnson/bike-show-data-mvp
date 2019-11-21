
-- login table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- builder identification table
CREATE TABLE "builder" (
    "id" SERIAL PRIMARY KEY,
    "builder_name" VARCHAR (100),
    "build_brand" VARCHAR (100)
);

-- Main fork material
CREATE TABLE "fork_material" (
    "id" SERIAL PRIMARY KEY,
    "suspention" BOOLEAN,
    "carbon" BOOLEAN,
    "aluminum" BOOLEAN,
    "stainless" BOOLEAN,
    "steel" BOOLEAN,
    "steel_build" INT REFERENCES "steel_fork_build"("id"),
    "other_fm" VARCHAR (100),
    "notes_fm" VARCHAR
);

-- steel fork build style, refrenced by fork material table
CREATE TABLE "steel_fork_build" (
    "id" SERIAL PRIMARY KEY,
    "unicrown" BOOLEAN,
    "segmented" BOOLEAN,
    "lugged" BOOLEAN,
    "bilam" BOOLEAN,
    "other_sfb" VARCHAR (100),
    "notes_sfb" VARCHAR
);

-- Bike location placement refrence table
CREATE TABLE "placement"(
    "id" SERIAL PRIMARY KEY,
    "front" BOOLEAN,
    "rear" BOOLEAN,
    "both" BOOLEAN
);

-- Wheel size
CREATE TABLE "wheel_size" (
    "id" SERIAL PRIMARY KEY,
    "36" BOOLEAN,
    "700c/29" BOOLEAN,
    "650b/27.5" BOOLEAN,
    "26" BOOLEAN,
    "24" BOOLEAN,
    "20" BOOLEAN,
    "other_ws" VARCHAR (20),
    "notes_ws" VARCHAR (100),
    "location_w_id" INT REFERENCES "placement"("id")
);

-- tire size refrences location
CREATE TABLE "tire_size" (
    "id" SERIAL PRIMARY KEY,
    "diam" INTEGER, 
    "width" INTEGER,
    "other" VARCHAR (25),
    "notes" VARCHAR (100),
    "location_ts_id" INT REFERENCES "placement"("id")
);

-- axle type, refrences location
CREATE TABLE "axle_type" (
    "id" SERIAL PRIMARY KEY,
    "qr" BOOLEAN,
    "ta" BOOLEAN,
    "track" BOOLEAN,
    "other" VARCHAR (100),
    "notes" VARCHAR (100),
    "location_at_id" INT REFERENCES "placement"("id")
);

-- wheel/tires/axles file
CREATE TABLE "wheels_tires_axles_file"(
    "id" SERIAL PRIMARY KEY,
    "wheel_size_id" INT REFERENCES "wheel_size"("id"),
    "tire_size_id" INT REFERENCES "tire_size"("id"),
    "axle_id" INT REFERENCES "axle_type"("id")
);

--brand type, to be refrenced
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
    "sr_suntour" BOOLEAN,
    "dt_swiss" BOOLEAN,
    "white_industries" BOOLEAN,
    "velocity" BOOLEAN,
    "phil_wood" BOOLEAN,
    "i9" BOOLEAN,
    "fsa" BOOLEAN,
    "other" VARCHAR (400)
);

-- brake type, refrences charectoristics and brand
CREATE TABLE "brake_type" (
    "id" SERIAL PRIMARY KEY,
    "flat_mount_disc" BOOLEAN,
    "post_mount_disc" BOOLEAN,
    "is_disc" BOOLEAN,
    "canti" BOOLEAN,
    "center_hole" BOOLEAN,
    "coaster" BOOLEAN,
    "none_bt" BOOLEAN,
    "bt_brand_id" INT REFERENCES "component_brand" ("id"),
    "other" VARCHAR (100),
    "notes_bt" VARCHAR (100),
    "characteristic_id" INT REFERENCES "brake_characteristic" ("id"),
    "location_bt_id" INT REFERENCES "placement"("id")
);

-- brake charictoristics refrenced by brake type
CREATE TABLE "brake_characteristic"(
    "id" SERIAL PRIMARY KEY,
    "mechanical" BOOLEAN,
    "hydralic" BOOLEAN,
    "none_bc" BOOLEAN,
    "notes_bc" VARCHAR (100)
);

-- drive train table, refrences brand
CREATE TABLE "drive_train" (
    "id" SERIAL PRIMARY KEY,
    "mechanical" BOOLEAN,
    "wire" BOOLEAN,
    "wireless" BOOLEAN,
    "Hydraulic" BOOLEAN,
    "single_speed" BOOLEAN,
    "notes_dt" VARCHAR (100),
    "dt_brand_id" INT REFERENCES "component_brand" ("id")
);

-- brakes and dt file
CREATE TABLE "group_set_file"(
    "id" SERIAL PRIMARY KEY,
    "brake_id" INT REFERENCES "brake_type"("id"),
    "brake_char_id" INT REFERENCES "brake_characteristic"("id"),
    "dt_id" INT REFERENCES "drive_train"("id")
);



CREATE TABLE "builder_file" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user"("id"),
    "builder_id" INT REFERENCES "builder"("id"),
    "bike_type" VARCHAR (200),
    "p_material_used" VARCHAR (200),
    "s_material_used" VARCHAR (200),
    "p_frame_joining" VARCHAR (200),
    "s_frame_joining" VARCHAR (200),

	);
