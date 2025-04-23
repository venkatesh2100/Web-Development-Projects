import requests
from tabulate import tabulate
from datetime import datetime

username = "venkatesh2100"
url = f"https://api.github.com/users/{username}/repos?per_page=100"
response = requests.get(url)

if response.status_code != 200:
    print("Error:", response.status_code)
    exit()

repos = response.json()
sorted_repos = sorted(repos, key=lambda x: x["created_at"], reverse=True)

table = []
for repo in sorted_repos:
    created_at = datetime.strptime(repo["created_at"], "%Y-%m-%dT%H:%M:%SZ")
    formatted_date = created_at.strftime("%B %Y")
    table.append([repo["name"], f"[Link]({repo['html_url']})", formatted_date])

readme_content = f"""
# My Digital Treasure 🪙

Welcome to **"My Digital Treasure"** repository! 🎉📂 This is an impressive collection of my various projects that showcase my creativity and skills. Each project has been meticulously crafted with passion and attention to detail. 🚀💻😍

## 📊 GitHub Stats

![GitHub Streak](https://streak-stats.demolab.com?user={username}&theme=radical)
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username={username}&layout=compact&theme=radical)
![Venky's GitHub stats](https://github-readme-stats.vercel.app/api?username={username}&show_icons=true&theme=radical)

---

## 🗂️ Table of Projects

{tabulate(table, headers=["Project Name", "Repository Link", "Created At"], tablefmt="github")}
"""

with open("README.md", "w") as f:
    f.write(readme_content)

print("README.md updated successfully!")
