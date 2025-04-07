import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {
  Shield,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  PieChart as PieChartIcon,
  FileText,
  Eye,
  Lock,
  Copy,
  BrainCircuit,
  RefreshCw,
  Info
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';

// Mock data for charts
const riskScoreData = [
  { name: 'Jan', score: 65, threshold: 50 },
  { name: 'Feb', score: 59, threshold: 50 },
  { name: 'Mar', score: 80, threshold: 50 },
  { name: 'Apr', score: 81, threshold: 50 },
  { name: 'May', score: 56, threshold: 50 },
  { name: 'Jun', score: 55, threshold: 50 },
  { name: 'Jul', score: 40, threshold: 50 },
  { name: 'Aug', score: 70, threshold: 50 },
  { name: 'Sep', score: 90, threshold: 50 },
];

const valuationData = [
  { name: 'Q1', value: 240000 },
  { name: 'Q2', value: 300000 },
  { name: 'Q3', value: 280000 },
  { name: 'Q4', value: 450000 },
];

const infringementData = [
  { name: 'Visual - Character', value: 35 },
  { name: 'Audio Content', value: 25 },
  { name: 'Written Works', value: 20 },
  { name: 'Visual - Landmark', value: 15 },
  { name: 'Other', value: 5 },
];

const aiIndexData = [
  { name: 'Jan', index: 72 },
  { name: 'Feb', index: 75 },
  { name: 'Mar', index: 78 },
  { name: 'Apr', index: 82 },
  { name: 'May', index: 79 },
  { name: 'Jun', index: 85 },
  { name: 'Jul', index: 87 },
  { name: 'Aug', index: 90 },
  { name: 'Sep', index: 92 },
];

const deepfakeRiskData = [
  { name: 'Low', value: 30 },
  { name: 'Medium', value: 45 },
  { name: 'High', value: 25 },
];

const COLORS = ['#9D4EDD', '#7B2CBF', '#5A189A', '#3C096C', '#240046'];
const RISK_COLORS = {
  low: '#4CAF50',
  medium: '#FF9800',
  high: '#F44336'
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Animated variants for components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Dashboard Header */}
      <div className="pt-24 pb-6 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                REIVIP-COP Dashboard
              </h1>
              <p className="text-white/70">
                AI-powered IP integrity scoring platform by Reinvent DAO
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0 space-x-2">
              <Badge variant="outline" className="bg-reiv-purple/20 text-reiv-purple-light border-reiv-purple/30 px-3 py-1">
                <RefreshCw className="mr-1 h-3 w-3" /> Live Data
              </Badge>
              <Button size="sm" variant="outline" className="border-reiv-purple-light text-reiv-purple-light hover:bg-reiv-purple-light/10">
                <RefreshCw className="mr-2 h-4 w-4" /> Refresh
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="overview" className="data-[state=active]:bg-reiv-purple data-[state=active]:text-white">
              <Eye className="mr-2 h-4 w-4" /> Overview
            </TabsTrigger>
            <TabsTrigger value="risk-scores" className="data-[state=active]:bg-reiv-purple data-[state=active]:text-white">
              <AlertTriangle className="mr-2 h-4 w-4" /> Risk Scores
            </TabsTrigger>
            <TabsTrigger value="valuation" className="data-[state=active]:bg-reiv-purple data-[state=active]:text-white">
              <TrendingUp className="mr-2 h-4 w-4" /> Valuation Engine
            </TabsTrigger>
            <TabsTrigger value="ai-index" className="data-[state=active]:bg-reiv-purple data-[state=active]:text-white">
              <BrainCircuit className="mr-2 h-4 w-4" /> AI Index
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-reiv-purple data-[state=active]:text-white">
              <FileText className="mr-2 h-4 w-4" /> Reports
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* IP Integrity Score */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl text-white">IP Integrity Score</CardTitle>
                      <Badge className="bg-reiv-purple text-white">Real-time</Badge>
                    </div>
                    <CardDescription className="text-white/70">
                      Overall IP protection score based on multiple factors
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="transparent"
                            stroke="#1a1a1a"
                            strokeWidth="10"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="transparent"
                            stroke="#7B2CBF"
                            strokeWidth="10"
                            strokeDasharray="282.7"
                            strokeDashoffset={(282.7 * (1 - 0.78))}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-4xl font-bold text-white">78</span>
                          <span className="text-white/70 text-sm">out of 100</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <Badge className="bg-reiv-purple-light/20 text-reiv-purple-light border-reiv-purple-light/30">
                          Good Protection
                        </Badge>
                        <p className="text-white/70 mt-2 text-sm">
                          Your IP assets have strong protection, with some areas for improvement
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                      <div className="bg-background/30 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/70 text-sm">Infringement Risk</span>
                          <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30">Medium</Badge>
                        </div>
                        <Progress value={65} className="h-2 bg-white/10" indicatorClassName="bg-amber-500" />
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/70 text-sm">Deepfake Risk</span>
                          <Badge className="bg-red-500/20 text-red-500 border-red-500/30">High</Badge>
                        </div>
                        <Progress value={85} className="h-2 bg-white/10" indicatorClassName="bg-red-500" />
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/70 text-sm">Replication Risk</span>
                          <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Low</Badge>
                        </div>
                        <Progress value={30} className="h-2 bg-white/10" indicatorClassName="bg-green-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Alerts */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Recent Alerts</CardTitle>
                    <CardDescription className="text-white/70">
                      Latest IP protection alerts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Potential Infringement Detected",
                          description: "Similar content found on marketplace platform",
                          time: "2 hours ago",
                          severity: "high"
                        },
                        {
                          title: "Copyright Registration Expiring",
                          description: "Renewal required within 30 days",
                          time: "1 day ago",
                          severity: "medium"
                        },
                        {
                          title: "AI Model Trained on Your Content",
                          description: "Detected unauthorized use in training data",
                          time: "3 days ago",
                          severity: "medium"
                        },
                        {
                          title: "New Licensing Opportunity",
                          description: "Matching business interested in your IP",
                          time: "1 week ago",
                          severity: "low"
                        }
                      ].map((alert, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-background/30 hover:bg-background/40 transition-colors cursor-pointer">
                          <div className={`mt-0.5 p-1.5 rounded-full ${alert.severity === 'high' ? 'bg-red-500/20' :
                            alert.severity === 'medium' ? 'bg-amber-500/20' :
                              'bg-green-500/20'
                            }`}>
                            <AlertTriangle className={`h-4 w-4 ${alert.severity === 'high' ? 'text-red-500' :
                              alert.severity === 'medium' ? 'text-amber-500' :
                                'text-green-500'
                              }`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-white">{alert.title}</h4>
                            <p className="text-xs text-white/70">{alert.description}</p>
                            <p className="text-xs text-white/50 mt-1">{alert.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="link" className="text-reiv-purple-light hover:text-reiv-purple w-full">
                      View All Alerts
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* IP Asset Summary */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">IP Asset Summary</CardTitle>
                    <CardDescription className="text-white/70">
                      Overview of your protected IP assets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Total Assets</span>
                        <span className="text-white font-medium">24</span>
                      </div>
                      <Separator className="bg-white/10" />

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/70 text-sm">By Type</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-reiv-purple-light mr-2"></div>
                              <span className="text-white text-xs">Visual - Character Content</span>
                            </div>
                            <span className="text-white text-xs">8</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-reiv-purple mr-2"></div>
                              <span className="text-white text-xs">Audio Content</span>
                            </div>
                            <span className="text-white text-xs">5</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-reiv-purple-dark mr-2"></div>
                              <span className="text-white text-xs">Written Works</span>
                            </div>
                            <span className="text-white text-xs">7</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                              <span className="text-white text-xs">Visual - Landmark Content</span>
                            </div>
                            <span className="text-white text-xs">4</span>
                          </div>
                        </div>
                      </div>

                      <Separator className="bg-white/10" />

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/70 text-sm">Protection Status</span>
                        </div>
                        <div className="h-4 w-full rounded-full bg-background/30 overflow-hidden">
                          <div className="flex h-full">
                            <div className="bg-green-500 h-full" style={{ width: '70%' }}></div>
                            <div className="bg-amber-500 h-full" style={{ width: '20%' }}></div>
                            <div className="bg-red-500 h-full" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs">
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                            <span className="text-white/70">Protected (70%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-amber-500 mr-1"></div>
                            <span className="text-white/70">Pending (20%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                            <span className="text-white/70">At Risk (10%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="link" className="text-reiv-purple-light hover:text-reiv-purple w-full">
                      Manage IP Assets
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Valuation Trend */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Valuation Trend</CardTitle>
                    <CardDescription className="text-white/70">
                      Estimated value of your IP portfolio
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={valuationData}>
                          <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#7B2CBF" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#7B2CBF" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                          <XAxis dataKey="name" stroke="#666" />
                          <YAxis stroke="#666" tickFormatter={(value) => `$${value / 1000}k`} />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }}
                            formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
                          />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#9D4EDD"
                            fillOpacity={1}
                            fill="url(#colorValue)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <p className="text-white/70 text-xs">Current Valuation</p>
                        <p className="text-white text-xl font-bold">$450,000</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                        +12.5% from last quarter
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Infringement Distribution */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Infringement Risk Distribution</CardTitle>
                    <CardDescription className="text-white/70">
                      Risk breakdown by content type
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={infringementData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {infringementData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }}
                            formatter={(value) => [`${value}%`, 'Risk Level']}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {infringementData.map((entry, index) => (
                        <div key={index} className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          ></div>
                          <span className="text-white/70 text-xs">{entry.name}: {entry.value}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Index Score */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">AI Index Score Trend</CardTitle>
                    <CardDescription className="text-white/70">
                      Tracking your IP's performance against AI-driven metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={aiIndexData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                          <XAxis dataKey="name" stroke="#666" />
                          <YAxis domain={[0, 100]} stroke="#666" />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }}
                            formatter={(value) => [`${value}`, 'AI Index']}
                          />
                          <Line
                            type="monotone"
                            dataKey="index"
                            stroke="#9D4EDD"
                            strokeWidth={2}
                            dot={{ r: 4, fill: '#9D4EDD' }}
                            activeDot={{ r: 6, fill: '#9D4EDD' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-background/30 p-3 rounded-lg">
                        <p className="text-white/70 text-xs mb-1">Current Score</p>
                        <div className="flex items-baseline">
                          <p className="text-white text-2xl font-bold">92</p>
                          <p className="text-green-500 text-sm ml-2">+2 pts</p>
                        </div>
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <p className="text-white/70 text-xs mb-1">Industry Average</p>
                        <div className="flex items-baseline">
                          <p className="text-white text-2xl font-bold">76</p>
                          <p className="text-white/70 text-sm ml-2">points</p>
                        </div>
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <p className="text-white/70 text-xs mb-1">Percentile Rank</p>
                        <div className="flex items-baseline">
                          <p className="text-white text-2xl font-bold">Top 5%</p>
                          <p className="text-green-500 text-sm ml-2">↑</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Risk Scores Tab */}
          <TabsContent value="risk-scores">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Risk Score Trend */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Risk Score Trend</CardTitle>
                    <CardDescription className="text-white/70">
                      Historical risk assessment for your IP assets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={riskScoreData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                          <XAxis dataKey="name" stroke="#666" />
                          <YAxis domain={[0, 100]} stroke="#666" />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="score"
                            name="Risk Score"
                            stroke="#9D4EDD"
                            strokeWidth={2}
                            dot={{ r: 4, fill: '#9D4EDD' }}
                            activeDot={{ r: 6, fill: '#9D4EDD' }}
                          />
                          <Line
                            type="monotone"
                            dataKey="threshold"
                            name="Risk Threshold"
                            stroke="#666"
                            strokeDasharray="5 5"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-background/30 p-3 rounded-lg">
                        <p className="text-white/70 text-xs mb-1">Current Risk Score</p>
                        <div className="flex items-baseline">
                          <p className="text-white text-2xl font-bold">90</p>
                          <Badge className="ml-2 bg-red-500/20 text-red-500 border-red-500/30">High</Badge>
                        </div>
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <p className="text-white/70 text-xs mb-1">Average Risk (90 days)</p>
                        <div className="flex items-baseline">
                          <p className="text-white text-2xl font-bold">68</p>
                          <Badge className="ml-2 bg-amber-500/20 text-amber-500 border-amber-500/30">Medium</Badge>
                        </div>
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <p className="text-white/70 text-xs mb-1">Risk Trend</p>
                        <div className="flex items-baseline">
                          <p className="text-white text-2xl font-bold">+22%</p>
                          <p className="text-red-500 text-sm ml-2">↑ Increasing</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Risk Breakdown */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Risk Breakdown</CardTitle>
                    <CardDescription className="text-white/70">
                      Risk factors affecting your IP
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Infringement", score: 85, status: "high" },
                        { name: "Deepfake", score: 75, status: "high" },
                        { name: "Replication", score: 60, status: "medium" },
                        { name: "Unauthorized Use", score: 55, status: "medium" },
                        { name: "Legal Exposure", score: 40, status: "low" },
                        { name: "Market Dilution", score: 35, status: "low" }
                      ].map((risk, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm">{risk.name}</span>
                            <Badge className={`
                              ${risk.status === 'high' ? 'bg-red-500/20 text-red-500 border-red-500/30' :
                                risk.status === 'medium' ? 'bg-amber-500/20 text-amber-500 border-amber-500/30' :
                                  'bg-green-500/20 text-green-500 border-green-500/30'}
                            `}>
                              {risk.score}
                            </Badge>
                          </div>
                          <Progress
                            value={risk.score}
                            className="h-2 bg-white/10"
                            indicatorClassName={`
                              ${risk.status === 'high' ? 'bg-red-500' :
                                risk.status === 'medium' ? 'bg-amber-500' :
                                  'bg-green-500'}
                            `}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Deepfake Risk Analysis */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Deepfake Risk Analysis</CardTitle>
                    <CardDescription className="text-white/70">
                      AI-generated content risk assessment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={deepfakeRiskData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            <Cell fill={RISK_COLORS.low} />
                            <Cell fill={RISK_COLORS.medium} />
                            <Cell fill={RISK_COLORS.high} />
                          </Pie>
                          <Tooltip
                            contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }}
                            formatter={(value) => [`${value}%`, 'Percentage']}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {deepfakeRiskData.map((entry, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="w-3 h-3 rounded-full mb-1"
                            style={{ backgroundColor: Object.values(RISK_COLORS)[index] }}
                          ></div>
                          <span className="text-white/70 text-xs">{entry.name}</span>
                          <span className="text-white text-sm font-medium">{entry.value}%</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-background/30 rounded-lg">
                      <p className="text-white/70 text-sm">
                        <AlertTriangle className="inline-block h-4 w-4 mr-1 text-amber-500" />
                        25% of your visual content is at high risk for deepfake manipulation
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="border-reiv-purple-light text-reiv-purple-light hover:bg-reiv-purple-light/10 w-full">
                      View Detailed Analysis
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Protection Recommendations */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Protection Recommendations</CardTitle>
                    <CardDescription className="text-white/70">
                      AI-generated suggestions to improve your IP protection
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Implement Digital Watermarking",
                          description: "Add invisible watermarks to visual content to track unauthorized use",
                          impact: "high",
                          effort: "medium"
                        },
                        {
                          title: "Register Additional Copyrights",
                          description: "3 high-value assets need formal copyright registration",
                          impact: "high",
                          effort: "medium"
                        },
                        {
                          title: "Deploy Content Monitoring",
                          description: "Set up automated scanning for your content across platforms",
                          impact: "high",
                          effort: "low"
                        },
                        {
                          title: "Update Terms of Service",
                          description: "Strengthen legal language regarding AI training and usage",
                          impact: "medium",
                          effort: "low"
                        }
                      ].map((rec, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-background/30">
                          <div className="mt-0.5 p-1.5 rounded-full bg-reiv-purple/20">
                            <Shield className="h-4 w-4 text-reiv-purple-light" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-white">{rec.title}</h4>
                            <p className="text-xs text-white/70">{rec.description}</p>
                            <div className="flex mt-2 space-x-2">
                              <Badge className={`
                                ${rec.impact === 'high' ? 'bg-green-500/20 text-green-500 border-green-500/30' :
                                  'bg-amber-500/20 text-amber-500 border-amber-500/30'}
                              `}>
                                {rec.impact === 'high' ? 'High Impact' : 'Medium Impact'}
                              </Badge>
                              <Badge className={`
                                ${rec.effort === 'low' ? 'bg-green-500/20 text-green-500 border-green-500/30' :
                                  'bg-amber-500/20 text-amber-500 border-amber-500/30'}
                              `}>
                                {rec.effort === 'low' ? 'Low Effort' : 'Medium Effort'}
                              </Badge>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="border-reiv-purple-light text-reiv-purple-light hover:bg-reiv-purple-light/10">
                            Apply
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Valuation Engine Tab */}
          <TabsContent value="valuation">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Valuation Summary */}
              <motion.div variants={itemVariants} className="md:col-span-3">
                <Card className="bg-gradient-card border-reiv-purple/20">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl text-white">IP Portfolio Valuation</CardTitle>
                      <Badge className="bg-reiv-purple text-white">Updated Today</Badge>
                    </div>
                    <CardDescription className="text-white/70">
                      Comprehensive valuation of your intellectual property assets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-background/30 p-4 rounded-lg">
                        <p className="text-white/70 text-sm mb-1">Total Portfolio Value</p>
                        <p className="text-white text-2xl font-bold">$450,000</p>
                        <Badge className="mt-1 bg-green-500/20 text-green-500 border-green-500/30">
                          +12.5% from last quarter
                        </Badge>
                      </div>
                      <div className="bg-background/30 p-4 rounded-lg">
                        <p className="text-white/70 text-sm mb-1">Projected Annual Revenue</p>
                        <p className="text-white text-2xl font-bold">$85,000</p>
                        <Badge className="mt-1 bg-green-500/20 text-green-500 border-green-500/30">
                          +5.2% from last year
                        </Badge>
                      </div>
                      <div className="bg-background/30 p-4 rounded-lg">
                        <p className="text-white/70 text-sm mb-1">Collateral Potential</p>
                        <p className="text-white text-2xl font-bold">$320,000</p>
                        <p className="text-white/70 text-xs mt-1">
                          Estimated borrowing capacity
                        </p>
                      </div>
                      <div className="bg-background/30 p-4 rounded-lg">
                        <p className="text-white/70 text-sm mb-1">Confidence Score</p>
                        <div className="flex items-center">
                          <p className="text-white text-2xl font-bold">85%</p>
                          <Info className="ml-2 h-4 w-4 text-white/50" />
                        </div>
                        <p className="text-white/70 text-xs mt-1">
                          Based on market data reliability
                        </p>
                      </div>
                    </div>

                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { name: 'Visual IP', value: 180000, lastValue: 160000 },
                          { name: 'Audio IP', value: 120000, lastValue: 110000 },
                          { name: 'Written IP', value: 90000, lastValue: 85000 },
                          { name: 'Software IP', value: 60000, lastValue: 45000 },
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                          <XAxis dataKey="name" stroke="#666" />
                          <YAxis stroke="#666" tickFormatter={(value) => `$${value / 1000}k`} />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }}
                            formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
                          />
                          <Legend />
                          <Bar dataKey="lastValue" name="Previous Value" fill="#5A189A" />
                          <Bar dataKey="value" name="Current Value" fill="#9D4EDD" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Valuation Factors */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Valuation Factors</CardTitle>
                    <CardDescription className="text-white/70">
                      Key metrics influencing your IP valuation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Market Demand",
                          score: 85,
                          impact: "positive",
                          description: "Strong market interest in your content category"
                        },
                        {
                          name: "Uniqueness",
                          score: 92,
                          impact: "positive",
                          description: "Highly distinctive compared to similar works"
                        },
                        {
                          name: "Revenue History",
                          score: 78,
                          impact: "positive",
                          description: "Consistent earnings with growth potential"
                        },
                        {
                          name: "Legal Protection",
                          score: 65,
                          impact: "neutral",
                          description: "Adequate but could be strengthened"
                        },
                        {
                          name: "Market Saturation",
                          score: 45,
                          impact: "negative",
                          description: "Increasing competition in your segment"
                        },
                        {
                          name: "Technological Relevance",
                          score: 88,
                          impact: "positive",
                          description: "Well-positioned for emerging tech trends"
                        }
                      ].map((factor, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-white text-sm">{factor.name}</span>
                              <p className="text-white/70 text-xs">{factor.description}</p>
                            </div>
                            <Badge className={`
                              ${factor.impact === 'positive' ? 'bg-green-500/20 text-green-500 border-green-500/30' :
                                factor.impact === 'neutral' ? 'bg-amber-500/20 text-amber-500 border-amber-500/30' :
                                  'bg-red-500/20 text-red-500 border-red-500/30'}
                            `}>
                              {factor.score}
                            </Badge>
                          </div>
                          <Progress
                            value={factor.score}
                            className="h-2 bg-white/10"
                            indicatorClassName={`
                              ${factor.impact === 'positive' ? 'bg-green-500' :
                                factor.impact === 'neutral' ? 'bg-amber-500' :
                                  'bg-red-500'}
                            `}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Monetization Opportunities */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Monetization Opportunities</CardTitle>
                    <CardDescription className="text-white/70">
                      Potential revenue streams for your IP
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Licensing Opportunity",
                          description: "3 companies interested in licensing your visual content",
                          potential: "$25,000 - $40,000 annually",
                          match: "high"
                        },
                        {
                          title: "Collateralized Loan",
                          description: "Use your IP portfolio to secure financing",
                          potential: "Up to $320,000 in capital",
                          match: "high"
                        },
                        {
                          title: "NFT Collection",
                          description: "Convert select assets into limited NFT series",
                          potential: "$15,000 - $30,000 one-time",
                          match: "medium"
                        },
                        {
                          title: "Underwriting Incentives",
                          description: "Measurement of Risk Insights",
                          potential: "$5,000 - $10,000 monthly",
                          match: "medium"
                        }
                      ].map((opp, index) => (
                        <div key={index} className="p-3 rounded-lg bg-background/30 hover:bg-background/40 transition-colors cursor-pointer">
                          <h4 className="text-sm font-medium text-white">{opp.title}</h4>
                          <p className="text-xs text-white/70 mb-2">{opp.description}</p>
                          <div className="flex justify-between items-center">
                            <p className="text-xs text-reiv-purple-light">{opp.potential}</p>
                            <Badge className={`
                              ${opp.match === 'high' ? 'bg-green-500/20 text-green-500 border-green-500/30' :
                                'bg-amber-500/20 text-amber-500 border-amber-500/30'}
                            `}>
                              {opp.match === 'high' ? 'High Match' : 'Medium Match'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="border-reiv-purple-light text-reiv-purple-light hover:bg-reiv-purple-light/10 w-full">
                      Explore All Opportunities
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* AI Index Tab */}
          <TabsContent value="ai-index">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* AI Index Overview */}
              <motion.div variants={itemVariants} className="md:col-span-3">
                <Card className="bg-gradient-card border-reiv-purple/20">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl text-white">AI Index Overview</CardTitle>
                      <Badge className="bg-reiv-purple text-white">Real-time</Badge>
                    </div>
                    <CardDescription className="text-white/70">
                      Comprehensive AI-powered analysis of your IP portfolio
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-background/30 p-4 rounded-lg">
                        <p className="text-white/70 text-sm mb-1">Overall AI Index</p>
                        <p className="text-white text-2xl font-bold">92/100</p>
                        <Badge className="mt-1 bg-green-500/20 text-green-500 border-green-500/30">
                          Top 5% in your industry
                        </Badge>
                      </div>
                      <div className="bg-background/30 p-4 rounded-lg">
                        <p className="text-white/70 text-sm mb-1">AI Distinctiveness</p>
                        <p className="text-white text-2xl font-bold">95/100</p>
                        <p className="text-white/70 text-xs mt-1">
                          Highly unique compared to AI-generated content
                        </p>
                      </div>
                      <div className="bg-background/30 p-4 rounded-lg">
                        <p className="text-white/70 text-sm mb-1">AI Replication Risk</p>
                        <p className="text-white text-2xl font-bold">Low</p>
                        <p className="text-white/70 text-xs mt-1">
                          Difficult for AI to replicate your style
                        </p>
                      </div>
                      <div className="bg-background/30 p-4 rounded-lg">
                        <p className="text-white/70 text-sm mb-1">Market AI Saturation</p>
                        <p className="text-white text-2xl font-bold">Medium</p>
                        <p className="text-white/70 text-xs mt-1">
                          Growing AI presence in your market
                        </p>
                      </div>
                    </div>

                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={aiIndexData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                          <XAxis dataKey="name" stroke="#666" />
                          <YAxis domain={[0, 100]} stroke="#666" />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }}
                            formatter={(value) => [`${value}`, 'AI Index']}
                          />
                          <Line
                            type="monotone"
                            dataKey="index"
                            stroke="#9D4EDD"
                            strokeWidth={2}
                            dot={{ r: 4, fill: '#9D4EDD' }}
                            activeDot={{ r: 6, fill: '#9D4EDD' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Competitive Analysis */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">AI Competitive Analysis</CardTitle>
                    <CardDescription className="text-white/70">
                      How your IP compares to AI-generated alternatives
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          name: "Originality",
                          yourScore: 95,
                          aiAverage: 65,
                          description: "Your content shows high originality compared to AI-generated work"
                        },
                        {
                          name: "Complexity",
                          yourScore: 88,
                          aiAverage: 72,
                          description: "Your work demonstrates sophisticated structure and nuance"
                        },
                        {
                          name: "Emotional Impact",
                          yourScore: 90,
                          aiAverage: 45,
                          description: "Your content creates stronger emotional connections"
                        },
                        {
                          name: "Technical Quality",
                          yourScore: 85,
                          aiAverage: 80,
                          description: "Your technical execution is slightly above AI capabilities"
                        }
                      ].map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-white text-sm font-medium">{metric.name}</span>
                              <p className="text-white/70 text-xs">{metric.description}</p>
                            </div>
                          </div>
                          <div className="relative pt-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-xs text-white/70">Your Score</span>
                                <span className="text-xs font-semibold text-white ml-1">{metric.yourScore}</span>
                              </div>
                              <div>
                                <span className="text-xs text-white/70">AI Average</span>
                                <span className="text-xs font-semibold text-white ml-1">{metric.aiAverage}</span>
                              </div>
                            </div>
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-white/10 mt-1">
                              <div
                                className="bg-reiv-purple-light h-full"
                                style={{ width: `${metric.yourScore}%` }}
                              ></div>
                            </div>
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-white/10 mt-1">
                              <div
                                className="bg-gray-500 h-full"
                                style={{ width: `${metric.aiAverage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Protection Strategies */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">AI Protection Strategies</CardTitle>
                    <CardDescription className="text-white/70">
                      Recommended approaches to protect against AI threats
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "AI Training Opt-Out",
                          description: "Implement technical measures to prevent AI systems from training on your content",
                          status: "implemented"
                        },
                        {
                          title: "Watermarking",
                          description: "Add invisible digital watermarks that survive AI processing",
                          status: "recommended"
                        },
                        {
                          title: "Style Diversification",
                          description: "Develop distinctive stylistic elements that are difficult for AI to replicate",
                          status: "in progress"
                        },
                        {
                          title: "Legal Protection",
                          description: "Update copyright registrations with AI-specific protections",
                          status: "recommended"
                        },
                        {
                          title: "Monitoring Service",
                          description: "Deploy AI-powered monitoring to detect unauthorized AI usage",
                          status: "implemented"
                        }
                      ].map((strategy, index) => (
                        <div key={index} className="p-3 rounded-lg bg-background/30">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-sm font-medium text-white flex items-center">
                                {strategy.title}
                                {strategy.status === 'implemented' && (
                                  <Badge className="ml-2 bg-green-500/20 text-green-500 border-green-500/30">
                                    Implemented
                                  </Badge>
                                )}
                                {strategy.status === 'in progress' && (
                                  <Badge className="ml-2 bg-amber-500/20 text-amber-500 border-amber-500/30">
                                    In Progress
                                  </Badge>
                                )}
                                {strategy.status === 'recommended' && (
                                  <Badge className="ml-2 bg-reiv-purple/20 text-reiv-purple-light border-reiv-purple/30">
                                    Recommended
                                  </Badge>
                                )}
                              </h4>
                              <p className="text-xs text-white/70 mt-1">{strategy.description}</p>
                            </div>
                            {strategy.status === 'recommended' && (
                              <Button size="sm" variant="outline" className="border-reiv-purple-light text-reiv-purple-light hover:bg-reiv-purple-light/10">
                                Implement
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Available Reports */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Available Reports</CardTitle>
                    <CardDescription className="text-white/70">
                      Comprehensive analysis reports for your IP portfolio
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Quarterly Valuation Report",
                          description: "Comprehensive analysis of your IP portfolio value",
                          date: "September 30, 2023",
                          type: "pdf"
                        },
                        {
                          title: "AI Risk Assessment",
                          description: "Detailed analysis of AI-related threats to your IP",
                          date: "October 15, 2023",
                          type: "pdf"
                        },
                        {
                          title: "Market Opportunity Analysis",
                          description: "Potential monetization channels for your IP assets",
                          date: "August 22, 2023",
                          type: "pdf"
                        },
                        {
                          title: "Infringement Detection Report",
                          description: "Identified instances of potential IP infringement",
                          date: "October 5, 2023",
                          type: "pdf"
                        },
                        {
                          title: "Underwriting Performance",
                          description: "Revenue per risk tier report for the list of IP assets collection",
                          date: "September 12, 2023",
                          type: "pdf"
                        }
                      ].map((report, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-background/30 hover:bg-background/40 transition-colors cursor-pointer">
                          <div className="mt-0.5 p-2 rounded-full bg-reiv-purple/20">
                            <FileText className="h-5 w-5 text-reiv-purple-light" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-white">{report.title}</h4>
                            <p className="text-xs text-white/70">{report.description}</p>
                            <p className="text-xs text-white/50 mt-1">Generated: {report.date}</p>
                          </div>
                          <Button size="sm" variant="outline" className="border-reiv-purple-light text-reiv-purple-light hover:bg-reiv-purple-light/10">
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Generate Custom Report */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-card border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Generate Custom Report</CardTitle>
                    <CardDescription className="text-white/70">
                      Create a tailored analysis for your specific needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-background/30 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-white mb-2">Report Types</h4>
                        <div className="space-y-2">
                          {[
                            "Valuation Analysis",
                            "Risk Assessment",
                            "Market Opportunities",
                            "Infringement Detection",
                            "AI Vulnerability Analysis",
                            "Legal Protection Status"
                          ].map((type, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-4 h-4 rounded border border-reiv-purple-light mr-2"></div>
                              <span className="text-white/70 text-sm">{type}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-background/30 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-white mb-2">Time Period</h4>
                        <div className="space-y-2">
                          {[
                            "Last 30 days",
                            "Last quarter",
                            "Last 6 months",
                            "Last year",
                            "Custom range"
                          ].map((period, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-4 h-4 rounded-full border border-reiv-purple-light mr-2"></div>
                              <span className="text-white/70 text-sm">{period}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-background/30 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-white mb-2">Format</h4>
                        <div className="space-y-2">
                          {[
                            "PDF Report",
                            "Interactive Dashboard",
                            "Excel Spreadsheet",
                            "API Data Feed"
                          ].map((format, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-4 h-4 rounded-full border border-reiv-purple-light mr-2"></div>
                              <span className="text-white/70 text-sm">{format}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button className="bg-reiv-purple hover:bg-reiv-purple-dark text-white w-full">
                      Generate Custom Report
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Report Insights */}
              <motion.div variants={itemVariants} className="md:col-span-3">
                <Card className="bg-gradient-card border-reiv-purple/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">Report Insights</CardTitle>
                    <CardDescription className="text-white/70">
                      Key findings from your recent reports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Valuation Trend",
                          insight: "Your IP portfolio value has increased by 12.5% in the last quarter, outperforming the industry average of 8.3%.",
                          recommendation: "Consider expanding your high-performing visual content category to capitalize on market demand."
                        },
                        {
                          title: "Risk Analysis",
                          insight: "Deepfake risk has increased by 15% in the last month, particularly for your video content.",
                          recommendation: "Implement advanced watermarking and consider registering with deepfake detection services."
                        },
                        {
                          title: "Market Opportunity",
                          insight: "Three companies in the entertainment sector have shown interest in licensing your content.",
                          recommendation: "Engage with our licensing specialists to negotiate favorable terms and maximize revenue."
                        }
                      ].map((insight, index) => (
                        <div key={index} className="bg-background/30 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-white mb-2">{insight.title}</h4>
                          <p className="text-xs text-white/70 mb-3">{insight.insight}</p>
                          <div className="bg-reiv-purple/10 p-3 rounded border-l-2 border-reiv-purple-light">
                            <p className="text-xs text-white/90">
                              <span className="font-medium text-reiv-purple-light">Recommendation:</span> {insight.recommendation}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;