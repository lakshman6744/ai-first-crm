from app.langgraph.graph import graph

state = {
    "user_input": "Generate follow-up email after discussing CardioPlus.",
    "tool": "",
    "result": ""
}

result = graph.invoke(state)

print("\nTOOL:")
print(result["tool"])

print("\nRESULT:")
print(result["result"])