/* eslint-disable */
const bcrypt = require("bcryptjs");
const { createClient } = require("@supabase/supabase-js");
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
    console.error("Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey);

(async () => {
    const email = process.argv[2] || 'admin@byn.digital';
    const password = process.argv[3] || 'admin123';

    console.log(`Creating admin user: ${email}`);

    const hash = bcrypt.hashSync(password, 12);

    const { data, error } = await supabase
        .from('users')
        .insert([{ email, password_hash: hash, role: 'admin' }])
        .select();

    if (error) {
        console.error("Error creating user:", error.message);
    } else {
        console.log("User created successfully:", data);
    }
})();
