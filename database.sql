
-- login table INPUT#1
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- builder identification table INPUT#2
CREATE TABLE "show_info" (
    "id" SERIAL PRIMARY KEY,
    "show_name" VARCHAR (200),
    "show_location" VARCHAR (200),
    "show_date" DATE NOT NULL,
    "builder_name" VARCHAR (100),
    "build_brand" VARCHAR (100),
    "builder_location" VARCHAR (100)
);


-- fork info table INPUT#4
CREATE TABLE "fork_build" (
    "id" SERIAL PRIMARY KEY,
    "fork_build" VARCHAR (200),
    "steel_build" INT REFERENCES "steel_fork_build"("id"),
    "notes_fm" VARCHAR
);
-- INPUT#3
CREATE TABLE "steel_fork_build" (
    "id" SERIAL PRIMARY KEY,
    "put_together_how" VARCHAR (200),
    "notes_sfb" VARCHAR
);

-- Bike location placement refrence table INPUT#5
CREATE TABLE "placement"(
    "id" SERIAL PRIMARY KEY,
    "front" BOOLEAN,
    "rear" BOOLEAN,
    "both" BOOLEAN
);
-- INPUT#6
CREATE TABLE "wheel_size" (
    "id" SERIAL PRIMARY KEY,
    "tires_size" VARCHAR (50),
    "notes_ws" VARCHAR (100),
    "location_w_id" INT REFERENCES "placement"("id")
);
-- INPUT#7
CREATE TABLE "tire_size" (
    "id" SERIAL PRIMARY KEY,
    "size" VARCHAR (50),
    "notes" VARCHAR (100),
    "location_ts_id" INT REFERENCES "placement"("id")
);
-- INPUT#8
CREATE TABLE "axle_type" (
    "id" SERIAL PRIMARY KEY,
    "axle" VARCHAR (100),
    "location_at_id" INT REFERENCES "placement"("id")
);

-- wheel/tires/axles file INPUT#9
CREATE TABLE "wheels_tires_axles_file"(
    "id" SERIAL PRIMARY KEY,
    "wheel_id" INT REFERENCES "wheel_size"("id"),
    "tire_id" INT REFERENCES "tire_size"("id"),
    "axle_id" INT REFERENCES "axle_type"("id")
);

--brand type, to be refrenced INPUT#10
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



-- brake type, refrences charectoristics and brand INPUT#12
CREATE TABLE "brake_type" (
    "id" SERIAL PRIMARY KEY,
    "brake" VARCHAR (200),
    "bt_brand_id" INT REFERENCES "component_brand" ("id"),
    "notes_bt" VARCHAR (100),
    "characteristic_id" INT REFERENCES "brake_characteristic" ("id"),
    "location_bt_id" INT REFERENCES "placement"("id")
);
-- brake charictoristics refrenced by brake type INPUT#11
CREATE TABLE "brake_characteristic"(
    "id" SERIAL PRIMARY KEY,
    "char" VARCHAR (100),
    "notes_bc" VARCHAR (100)
);

-- drive train table, refrences brand INPUT#13
CREATE TABLE "drive_train" (
    "id" SERIAL PRIMARY KEY,
    "dt_char" VARCHAR (200),
    "notes_dt" VARCHAR (100),
    "dt_brand_id" INT REFERENCES "component_brand" ("id")
);


-- INPUT#14
CREATE TABLE "bike_file" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user"("id"),
    "builder_id" INT REFERENCES "show_info"("id"),
    "bike_type_id" VARCHAR (200),
    "p_material_used_id" VARCHAR (200),
    "s_material_used_id" VARCHAR (200),
    "p_frame_joining_id" VARCHAR (200),
    "s_frame_joining_id" VARCHAR (200),  
    "fork_id" INT REFERENCES "fork_build"("id"),
    "brake_id" INT REFERENCES "brake_type"("id"),
    "dt_id" INT REFERENCES "drive_train"("id"),
    "wta_id" INT REFERENCES "wheels_tires_axles_file"("id")
    );








--     -- login table   saving to just keep track 
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

-- -- builder identification table
-- CREATE TABLE "builder" (
--     "id" SERIAL PRIMARY KEY,
--     "builder_name" VARCHAR (100),
--     "build_brand" VARCHAR (100)
-- );

-- -- Bike type per builder
-- CREATE TABLE "bike_type" (
--     "id" SERIAL PRIMARY KEY,
--     "road" BOOLEAN,
--     "cyclocross" BOOLEAN,
--     "gravel" BOOLEAN,
--     "moutain" BOOLEAN,
--     "city" BOOLEAN,
--     "track" BOOLEAN,
--     "tandem" BOOLEAN,
--     "experimental" BOOLEAN,
--     "touring" BOOLEAN,
--     "other_bike_type" VARCHAR (100),
--     "notes_bike_type" VARCHAR (200)
-- );


-- -- primary frame material, removed its link to secondary table
-- CREATE TABLE "primary_frame_material" (
--     "id" SERIAL PRIMARY KEY,
--     "steel" BOOLEAN,
--     "stainless" BOOLEAN,
--     "carbon" BOOLEAN,
--     "aluminum" BOOLEAN,
--     "titanium" BOOLEAN,
--     "magnesium" BOOLEAN,
--     "wood" BOOLEAN,
--     "bamboo" BOOLEAN,
--     "other_pfm" VARCHAR (50),
--     "notes_pfm" VARCHAR (200)
-- );

-- -- secondary frame material, refrenced by primary frame material
-- CREATE TABLE "secondary_frame_material" (
--     "id" SERIAL PRIMARY KEY,
--     "is_present" BOOLEAN,
--     "steel_sfm" BOOLEAN,
--     "stainless_sfm" BOOLEAN,
--     "carbon_sfm" BOOLEAN,
--     "aluminum_sfm" BOOLEAN,
--     "titanium_sfm" BOOLEAN,
--     "magnesium_sfm" BOOLEAN,
--     "wood_sfm" BOOLEAN,
--     "bamboo_sfm" BOOLEAN,
--     "other_sfm" VARCHAR (50),
--     "notes_sfm" VARCHAR (200)
-- );

-- -- Primary means of frame joining
-- CREATE TABLE "primary_frame_joining" (
--     "id" SERIAL PRIMARY KEY,
--     "welding" BOOLEAN,
--     "brass_fillet" BOOLEAN,
--     "lugged" BOOLEAN,
--     "layed_up" BOOLEAN,
--     "bonded" BOOLEAN,
--     "silver_fillet" BOOLEAN,
--     "mechanical" BOOLEAN,
--     "other_pfj" VARCHAR (100),
--     "notes_pfj" VARCHAR (200)
-- );

-- -- Secondary frame joining material, if present. Refrenced by Primary frame joining table
-- CREATE TABLE "secondary_frame_joining" (
--     "id" SERIAL PRIMARY KEY,
--     "is_present" BOOLEAN,
--     "welding" BOOLEAN,
--     "brass_fillet" BOOLEAN,
--     "lugged" BOOLEAN,
--     "layed_up" BOOLEAN,
--     "bonded" BOOLEAN,
--     "silver_fillet" BOOLEAN,
--     "mechanical" BOOLEAN,
--     "other_sfj" VARCHAR (100),
--     "notes_sfj" VARCHAR (200)
-- );

-- -- Main fork material
-- CREATE TABLE "fork_material" (
--     "id" SERIAL PRIMARY KEY,
--     "suspention" BOOLEAN,
--     "carbon" BOOLEAN,
--     "aluminum" BOOLEAN,
--     "stainless" BOOLEAN,
--     "steel" BOOLEAN,
--     "steel_build" INT REFERENCES "steel_fork_build"("id"),
--     "other_fm" VARCHAR (100),
--     "notes_fm" VARCHAR
-- );

-- -- steel fork build style, refrenced by fork material table
-- CREATE TABLE "steel_fork_build" (
--     "id" SERIAL PRIMARY KEY,
--     "unicrown" BOOLEAN,
--     "segmented" BOOLEAN,
--     "lugged" BOOLEAN,
--     "bilam" BOOLEAN,
--     "other_sfb" VARCHAR (100),
--     "notes_sfb" VARCHAR
-- );

-- --  creating files to help organize 
-- CREATE TABLE "frame_info_file" (
--     "id" SERIAL PRIMARY KEY,
--     "bike_type_id" INT REFERENCES "bike_type"("id"),
--     "pfm_id" INT REFERENCES "primary_frame_material"("id"),
--     "sfm_id" INT REFERENCES "secondary_frame_material"("id"),
--     "pfj_id" INT REFERENCES "primary_frame_joining"("id"),
--     "sfj_id" INT REFERENCES "secondary_frame_joining"("id"),
--     "fork_material_id" INT REFERENCES "fork_material"("id"),
--     "steel_fork_build_id" INT REFERENCES "steel_fork_build"("id")
-- );

-- -- Bike location placement refrence table
-- CREATE TABLE "placement"(
--     "id" SERIAL PRIMARY KEY,
--     "front" BOOLEAN,
--     "rear" BOOLEAN,
--     "both" BOOLEAN
-- );

-- -- Wheel size
-- CREATE TABLE "wheel_size" (
--     "id" SERIAL PRIMARY KEY,
--     "36" BOOLEAN,
--     "700c/29" BOOLEAN,
--     "650b/27.5" BOOLEAN,
--     "26" BOOLEAN,
--     "24" BOOLEAN,
--     "20" BOOLEAN,
--     "other_ws" VARCHAR (20),
--     "notes_ws" VARCHAR (100),
--     "location_w_id" INT REFERENCES "placement"("id")
-- );

-- -- tire size refrences location
-- CREATE TABLE "tire_size" (
--     "id" SERIAL PRIMARY KEY,
--     "diam" INTEGER, 
--     "width" INTEGER,
--     "other" VARCHAR (25),
--     "notes" VARCHAR (100),
--     "location_ts_id" INT REFERENCES "placement"("id")
-- );

-- -- axle type, refrences location
-- CREATE TABLE "axle_type" (
--     "id" SERIAL PRIMARY KEY,
--     "qr" BOOLEAN,
--     "ta" BOOLEAN,
--     "track" BOOLEAN,
--     "other" VARCHAR (100),
--     "notes" VARCHAR (100),
--     "location_at_id" INT REFERENCES "placement"("id")
-- );

-- -- wheel/tires/axles file
-- CREATE TABLE "wheels_tires_axles_file"(
--     "id" SERIAL PRIMARY KEY,
--     "wheel_size_id" INT REFERENCES "wheel_size"("id"),
--     "tire_size_id" INT REFERENCES "tire_size"("id"),
--     "axle_id" INT REFERENCES "axle_type"("id")
-- );

-- --brand type, to be refrenced
-- CREATE TABLE "component_brand" (
--     "id" SERIAL PRIMARY KEY,
--     "paul" BOOLEAN,
--     "sram" BOOLEAN,
--     "shimano" BOOLEAN,
--     "campy" BOOLEAN,
--     "hayes" BOOLEAN,
--     "hope" BOOLEAN,
--     "trp" BOOLEAN,
--     "promax" BOOLEAN,
--     "cane_creek" BOOLEAN,
--     "brooks" BOOLEAN,
--     "ritchey" BOOLEAN,
--     "thompson" BOOLEAN,
--     "raceface" BOOLEAN,
--     "velo_orange" BOOLEAN,
--     "sr_suntour" BOOLEAN,
--     "dt_swiss" BOOLEAN,
--     "white_industries" BOOLEAN,
--     "velocity" BOOLEAN,
--     "phil_wood" BOOLEAN,
--     "i9" BOOLEAN,
--     "fsa" BOOLEAN,
--     "other" VARCHAR (400)
-- );

-- -- brake type, refrences charectoristics and brand
-- CREATE TABLE "brake_type" (
--     "id" SERIAL PRIMARY KEY,
--     "flat_mount_disc" BOOLEAN,
--     "post_mount_disc" BOOLEAN,
--     "is_disc" BOOLEAN,
--     "canti" BOOLEAN,
--     "center_hole" BOOLEAN,
--     "coaster" BOOLEAN,
--     "none_bt" BOOLEAN,
--     "bt_brand_id" INT REFERENCES "component_brand" ("id"),
--     "other" VARCHAR (100),
--     "notes_bt" VARCHAR (100),
--     "characteristic_id" INT REFERENCES "brake_characteristic" ("id"),
--     "location_bt_id" INT REFERENCES "placement"("id")
-- );

-- -- brake charictoristics refrenced by brake type
-- CREATE TABLE "brake_characteristic"(
--     "id" SERIAL PRIMARY KEY,
--     "mechanical" BOOLEAN,
--     "hydralic" BOOLEAN,
--     "none_bc" BOOLEAN,
--     "notes_bc" VARCHAR (100)
-- );

-- -- drive train table, refrences brand
-- CREATE TABLE "drive_train" (
--     "id" SERIAL PRIMARY KEY,
--     "mechanical" BOOLEAN,
--     "wire" BOOLEAN,
--     "wireless" BOOLEAN,
--     "Hydraulic" BOOLEAN,
--     "single_speed" BOOLEAN,
--     "notes_dt" VARCHAR (100),
--     "dt_brand_id" INT REFERENCES "component_brand" ("id")
-- );

-- -- brakes and dt file
-- CREATE TABLE "group_set_file"(
--     "id" SERIAL PRIMARY KEY,
--     "brake_id" INT REFERENCES "brake_type"("id"),
--     "brake_char_id" INT REFERENCES "brake_characteristic"("id"),
--     "dt_id" INT REFERENCES "drive_train"("id")
-- );

-- -- main file to refrence all other
-- CREATE TABLE "bike_file" (
--     "id" SERIAL PRIMARY KEY,
--     "user_id" INT REFERENCES "user"("id"),
--     "builder_id" INT REFERENCES "builder"("id"),
--     "frame_info_id" INT REFERENCES "frame_info_file"("id"),
--     "wta_file_id" INT REFERENCES "wheels_tires_axles_file"("id"),
--     "gs_id" INT REFERENCES "group_set_file"("id"),
--     "bike_img" TEXT
-- );


-- CREATE TABLE "builder_file" (
-- 	"id" SERIAL PRIMARY KEY,
-- 	"user_id" INT REFERENCES "user"("id"),
--     "builder_id" INT REFERENCES "builder"("id")
-- );
