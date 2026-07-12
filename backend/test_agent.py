from app.langgraph.agent import choose_tool

tool = choose_tool(
    "Find all cardiologists in Hyderabad"
)

print(tool)