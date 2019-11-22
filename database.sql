
-- login table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- builder identification table
CREATE TABLE "builder_info" (
    "id" SERIAL PRIMARY KEY,
    "builder_name" VARCHAR (100),
    "build_brand" VARCHAR (100),
    "builder_location" VARCHAR (100),
    "show_name" VARCHAR (200),
    "show_location" VARCHAR (200)
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



CREATE TABLE "brake_info" (
    "id" SERIAL PRIMARY KEY,
    "brake_type" VARCHAR (300),
    "characteristic_id" INT REFERENCES "brake_characteristic" ("id"),
    "bt_brand_id" INT REFERENCES "component_brand" ("id"),
    "location" INT REFERENCES "placement"("id"),
    "bike_id" INT REFERENCES 
)

-- brake charictoristics refrenced by brake type
CREATE TABLE "brake_characteristic"(
    "id" SERIAL PRIMARY KEY,
    "mechanical" BOOLEAN,
    "hydralic" BOOLEAN,
    "none_bc" BOOLEAN,
    "notes_bc" VARCHAR (100)
);



CREATE TABLE "bike_file" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user"("id"),
    "builder_id" INT REFERENCES "builder"("id"),
    "bike_type" VARCHAR (200),
    "p_material_used" VARCHAR (200),
    "s_material_used" VARCHAR (200),
    "p_frame_joining" VARCHAR (200),
    "s_frame_joining" VARCHAR (200),  
    "fork_build" VARCHAR (200),
    "steel_fork_build" VARCHAR (200),
    "wheels_tires" INT REFERENCES "wheels_tires_axles_file"("id"),



	);
