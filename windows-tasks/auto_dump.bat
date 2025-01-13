set mydate=%date:~10,4%%date:~7,2%%date:~4,2%
cd "C:\minciencias_strapi\"
git add .
git commit -m "Backup date %mydate%"
git push origin master