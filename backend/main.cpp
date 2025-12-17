#include "crow/app.h"
#include "crow/json.h"
#include <vector>
#include <string>

using namespace std;

vector<string> generateTips(double total) {
    vector<string> tips;

    if (total < 200) {
        tips.push_back("Great job! Your footprint is low.");
        tips.push_back("Maintain energy-saving habits.");
    } else if (total < 500) {
        tips.push_back("Reduce AC usage when possible.");
        tips.push_back("Try public transport or carpooling.");
    } else {
        tips.push_back("Switch to renewable energy if possible.");
        tips.push_back("Use bicycle for short distances.");
        tips.push_back("Reduce overall power consumption.");
    }
    return tips;
}

int main() {
    crow::SimpleApp app;
    
CROW_ROUTE(app, "/calc").methods("POST"_method)
([](const crow::request& req) {
    crow::response res;
    res.add_header("Access-Control-Allow-Origin", "*");
    res.add_header("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.add_header("Access-Control-Allow-Headers", "Content-Type");
    res.add_header("Content-Type", "application/json"); // 🔥 ADD THIS

    auto data = crow::json::load(req.body);
    if (!data) {
        res.code = 400;
        res.body = R"({"error":"Invalid JSON"})";
        return res;
    }

    double electricity = data["electricity"].d();
    double travel = data["travel"].d();
    double waste = data["waste"].d();

    double total =
        (electricity * 0.5) +
        (travel * 0.21) +
        (waste * 0.8);

    auto tips = generateTips(total);

    crow::json::wvalue result;
    result["total"] = total;
    for (size_t i = 0; i < tips.size(); i++) {
        result["tips"][i] = tips[i];
    }

    res.code = 200;
    res.body = result.dump();
    return res;
});

    app.port(8080).multithreaded().run();
}
